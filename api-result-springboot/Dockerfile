FROM maven:3.6.3-openjdk-11
# FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/api-result-0.1.jar apiResult.jar
ENTRYPOINT [ "java", "-jar", "apiResult.jar" ]