package ru.oblteh.migrator;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

final class Settings {
  static final String SOURCE = "https://jira.mos.social";
  static final String DEST_JIRA = "http://jira.oblteh:8080";
  static final String REDMINE = "https://rm.oblteh.ru/redmine/projects/mehr/issues/new";
  final Map<String, String> values;
  Settings(Path file) throws IOException {
    values = new HashMap<>();
    for (String line : Files.readAllLines(file)) {
      String text = line.trim();
      if (text.isEmpty() || text.startsWith("#") || !text.contains("=")) continue;
      int index = text.indexOf('='); values.put(text.substring(0, index).trim(), text.substring(index + 1).trim());
    }
  }
  String required(String key) { String value = values.get(key); if (value == null || value.isBlank()) throw new IllegalStateException("Нет " + key + " в .env"); return value; }
}
