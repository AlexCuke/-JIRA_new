# Build stage: Maven and all Java dependencies stay out of the final image.
FROM maven:3.9.11-eclipse-temurin-21 AS builder
WORKDIR /build
COPY pom.xml .
COPY src ./src
# The local network may intercept HTTPS with a corporate certificate that is not
# present in the stock JDK trust store. This affects downloads only at build time.
RUN mvn --batch-mode -q -DskipTests \
    -Dmaven.resolver.transport=wagon \
    -Dmaven.wagon.http.ssl.insecure=true \
    -Dmaven.wagon.http.ssl.allowall=true package

# Runtime stage. The resulting JAR is available at /app/jira-task-migrator.jar.
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=builder /build/target/jira-task-migrator-1.0.0.jar /app/jira-task-migrator.jar
ENTRYPOINT ["java", "-jar", "/app/jira-task-migrator.jar"]
