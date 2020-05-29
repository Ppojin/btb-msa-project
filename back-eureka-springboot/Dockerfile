FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/back-eureka-0.1.jar eureka.jar
ENTRYPOINT [ "java", "-jar", "eureka.jar" ]