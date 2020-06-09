FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/api-exam-0.0.1-SNAPSHOT.jar apiExam.jar
ENTRYPOINT [ "java", "-jar", "apiExam.jar" ]