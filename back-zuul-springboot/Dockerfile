FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/myapp-zuul-gateway-0.1.jar zuul.jar
ENTRYPOINT [ "java", "-jar", "zuul.jar" ]
# mvn clean
# mvn package
# docker build -t ppojin/mymsa-zuul-gateway --force-rm=true .
# docker push ppojin/mymsa-zuul-gateway