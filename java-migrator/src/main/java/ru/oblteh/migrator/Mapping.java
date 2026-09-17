package ru.oblteh.migrator;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

public record Mapping(
    String label, String selector, String target, String target_system,
    String target_selector, String target_label, String target_project,
    Boolean default_only, String default_value, Map<String, String> value_mapping
) {
  static List<Mapping> load(Path root, String targetSystem, String project) throws Exception {
    String name = switch (targetSystem + ":" + (project == null ? "" : project)) {
      case "redmine:" -> "jira_to_redmine_mapping.json";
      case "jira:КИС ЕМИАС (KIS)" -> "jira_to_jira_obl_KIS_mapping.json";
      case "jira:КИС 2.0 (REFACT)" -> "jira_to_jira_obl_KIS_2_0_mapping.json";
      default -> throw new IllegalArgumentException("Неизвестное направление переноса");
    };
    try (Reader reader = Files.newBufferedReader(root.resolve(name))) {
      List<Mapping> result = new Gson().fromJson(reader, new TypeToken<List<Mapping>>() {}.getType());
      if (result == null || result.isEmpty()) throw new IllegalStateException("В маппинге нет полей: " + name);
      return result;
    }
  }

  String targetValue(String sourceValue) {
    if (sourceValue == null || sourceValue.isBlank()) return default_value == null ? "" : default_value;
    if (value_mapping == null || value_mapping.isEmpty()) return sourceValue;
    return value_mapping.getOrDefault(sourceValue.trim(), "");
  }
  boolean defaultOnly() { return Boolean.TRUE.equals(default_only); }
}
