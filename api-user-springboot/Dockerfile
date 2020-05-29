FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/user-0.1.jar apiUser.jar
ENTRYPOINT [ "java", "-jar", "apiUser.jar" ]