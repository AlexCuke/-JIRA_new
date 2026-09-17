package ru.oblteh.migrator;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;
import javax.swing.*;
import java.awt.*;
import java.nio.file.Path;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Java Playwright UI. It fills a form but deliberately never presses its final submit button. */
public final class MigrationApp extends JFrame {
  private final JComboBox<String> sourceProject = new JComboBox<>(new String[]{"KISEMIAS2019-", "KISEMIAS2025-", "REFACT-"});
  private final JComboBox<String> destination = new JComboBox<>(new String[]{"Jira OBL KIS", "Jira OBL KIS 2.0", "Redmine"});
  private final JTextField issue = new JTextField(20);
  private final JButton start = new JButton("Заполнить форму по маппингу");
  private final JTextArea log = new JTextArea();
  private final Path root = Path.of("..").toAbsolutePath().normalize();

  private MigrationApp() {
    super("Мигратор задач — Java Playwright");
    setDefaultCloseOperation(EXIT_ON_CLOSE); setSize(720, 520); setLocationByPlatform(true);
    JPanel top = new JPanel(new GridBagLayout()); GridBagConstraints c = new GridBagConstraints(); c.insets = new Insets(5, 5, 5, 5); c.anchor = GridBagConstraints.WEST;
    addRow(top, c, 0, "Исходный проект", sourceProject);
    addRow(top, c, 1, "Целевая система", destination);
    addRow(top, c, 2, "Номер или ключ задачи", issue);
    JButton mappings = new JButton("Открыть единые настройки маппинга (Python)");
    mappings.addActionListener(event -> openMappings());
    c.gridx = 1; c.gridy = 3; top.add(mappings, c); c.gridy = 4; top.add(start, c);
    add(top, BorderLayout.NORTH);
    log.setEditable(false); log.setFont(new Font(Font.MONOSPACED, Font.PLAIN, 12)); add(new JScrollPane(log), BorderLayout.CENTER);
    start.addActionListener(event -> runMigration());
  }
  private void addRow(JPanel panel, GridBagConstraints c, int row, String label, Component input) {
    c.gridx = 0; c.gridy = row; panel.add(new JLabel(label + ":"), c); c.gridx = 1; panel.add(input, c);
  }
  private void openMappings() {
    try { new ProcessBuilder("python", root.resolve("unified_mapping_gui.py").toString()).directory(root.toFile()).start(); }
    catch (Exception error) { showError("Не удалось открыть настройки: " + error.getMessage()); }
  }
  private void runMigration() {
    String entered = issue.getText().trim().toUpperCase(); String prefix = (String) sourceProject.getSelectedItem();
    if (entered.matches("[A-Z0-9]+-\\d+")) { prefix = entered.substring(0, entered.lastIndexOf('-') + 1); entered = entered.substring(entered.lastIndexOf('-') + 1); }
    if (!entered.matches("\\d+")) { showError("Введите номер или ключ задачи."); return; }
    String target = (String) destination.getSelectedItem(); String finalPrefix = prefix, number = entered;
    start.setEnabled(false); log.setText("");
    new SwingWorker<Void, String>() {
      protected Void doInBackground() throws Exception { migrate(finalPrefix, number, target); return null; }
      protected void process(List<String> lines) { lines.forEach(line -> log.append(line + "\n")); }
      protected void done() { start.setEnabled(true); try { get(); publish("Готово: форма заполнена и оставлена открытой для проверки."); } catch (Exception e) { showError(e.getCause() == null ? e.getMessage() : e.getCause().getMessage()); } }
      void info(String message) { publish(message); }
    }.execute();
  }
  private void migrate(String prefix, String number, String targetName) throws Exception {
    Settings settings = new Settings(root.resolve(".env"));
    String system = targetName.equals("Redmine") ? "redmine" : "jira";
    String project = targetName.equals("Jira OBL KIS") ? "КИС ЕМИАС (KIS)" : targetName.equals("Jira OBL KIS 2.0") ? "КИС 2.0 (REFACT)" : null;
    List<Mapping> mappings = Mapping.load(root, system, project);
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
      BrowserContext context = browser.newContext(new Browser.NewContextOptions().setIgnoreHTTPSErrors(true)); Page page = context.newPage();
      String sourceUrl = Settings.SOURCE + "/browse/" + prefix + number;
      page.navigate(sourceUrl); loginSource(page, settings); page.locator("#summary-val").waitFor();
      Map<Mapping, String> values = new LinkedHashMap<>();
      for (Mapping mapping : mappings) values.put(mapping, mapping.defaultOnly() ? mapping.targetValue("") : read(page, mapping));
      if (system.equals("jira")) openJiraForm(page, settings, project); else openRedmineForm(page, settings);
      for (Map.Entry<Mapping, String> item : values.entrySet()) fill(page, item.getKey(), item.getValue());
      appendReference(page, system, number, sourceUrl);
      while (!page.isClosed()) page.waitForTimeout(500);
      context.close(); browser.close();
    }
  }
  private void loginSource(Page page, Settings s) {
    if (page.locator("#username-field").count() == 0) return;
    page.locator("#username-field").fill(s.required("SOURCE_LOGIN")); page.locator("#password-field").fill(s.required("SOURCE_PASSWORD")); page.locator("#login-button").click(); page.locator("#username-field").waitFor(new Locator.WaitForOptions().setState(WaitForSelectorState.DETACHED));
  }
  private void openJiraForm(Page page, Settings s, String project) {
    page.navigate(Settings.DEST_JIRA + "/secure/Dashboard.jspa");
    if (page.locator("#login-form-username").count() > 0) { page.locator("#login-form-username").fill(s.required("DEST_LOGIN")); page.locator("#login-form-password").fill(s.required("DEST_PASSWORD")); page.locator("#login").click(); page.locator("#login-form-username").waitFor(new Locator.WaitForOptions().setState(WaitForSelectorState.DETACHED)); }
    page.navigate(Settings.DEST_JIRA + "/secure/CreateIssue!default.jspa");
    Locator projectField = page.locator("#project-field"); projectField.fill(project); page.getByRole(AriaRole.OPTION, new Page.GetByRoleOptions().setName(project).setExact(true)).first().click();
    Locator next = page.locator("#issue-create-submit"); if (next.count() > 0) next.click(); page.locator("#summary").waitFor();
  }
  private void openRedmineForm(Page page, Settings s) {
    page.navigate(Settings.REDMINE); if (page.locator("#username").count() > 0) { page.locator("#username").fill(s.required("REDMINE_LOGIN")); page.locator("#password").fill(s.required("REDMINE_PASSWORD")); page.locator("[name=login]").click(); } page.locator("#issue_subject").waitFor();
  }
  private String read(Page page, Mapping mapping) {
    if (mapping.defaultOnly()) return ""; Locator element = page.locator(mapping.selector());
    if (element.count() == 0) return ""; String value = element.evaluate("el => ('value' in el ? el.value : el.innerText)").toString().trim(); return mapping.targetValue(value);
  }
  private void fill(Page page, Mapping mapping, String value) {
    if (value == null || value.isBlank()) return; Locator field = page.locator(mapping.target_selector()); if (field.count() == 0) return;
    String tag = field.evaluate("el => el.tagName.toLowerCase()").toString();
    if (tag.equals("select")) field.selectOption(new SelectOption().setLabel(value)); else field.fill(value);
  }
  private void appendReference(Page page, String system, String number, String sourceUrl) {
    String summary = system.equals("jira") ? "#summary" : "#issue_subject"; Locator title = page.locator(summary); title.fill(title.inputValue().trim() + " [" + number + "]");
    String description = system.equals("jira") ? "#description" : "#issue_description"; Locator body = page.locator(description); if (body.count() > 0) body.fill(body.inputValue() + "\n\nСсылка на глобальную JIRA - " + sourceUrl);
  }
  private void showError(String message) { SwingUtilities.invokeLater(() -> JOptionPane.showMessageDialog(this, message, "Ошибка", JOptionPane.ERROR_MESSAGE)); }
  public static void main(String[] args) { SwingUtilities.invokeLater(() -> new MigrationApp().setVisible(true)); }
}
