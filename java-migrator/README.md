# Java Jira Task Migrator

Java/Swing rewrite of the Python migration tool. It uses Java Playwright and the existing JSON mapping files in the parent folder.

Requirements: Java 21+ and Maven 3.9+.

```powershell
cd java-migrator
mvn compile exec:java
```

The application reads credentials from `../.env`:

```text
SOURCE_LOGIN=...
SOURCE_PASSWORD=...
DEST_LOGIN=...
DEST_PASSWORD=...
REDMINE_LOGIN=...
REDMINE_PASSWORD=...
```

Mappings are read from the parent folder:

- `jira_to_redmine_mapping.json`
- `jira_to_jira_obl_KIS_mapping.json`
- `jira_to_jira_obl_KIS_2_0_mapping.json`

The Java version fills forms only. It does not submit or create an issue.

## Docker build

Docker builds the runnable JAR with Maven inside the container:

```powershell
docker build -t jira-task-migrator:latest .
```

The container is intended for compilation and packaging. The Swing interface needs a desktop display, so run the completed JAR on Windows:

```powershell
docker create --name jira-task-migrator-build jira-task-migrator:latest
docker cp jira-task-migrator-build:/app/jira-task-migrator.jar .\jira-task-migrator.jar
docker rm jira-task-migrator-build
java -jar .\jira-task-migrator.jar
```
