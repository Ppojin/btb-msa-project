FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/back-config-0.1.jar apiConfig.jar
ENTRYPOINT [ "java", "-jar", "apiConfig.jar" ]