FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/api-qubank-0.1.jar apiQABank.jar
ENTRYPOINT [ "java", "-jar", "apiQABank.jar" ]