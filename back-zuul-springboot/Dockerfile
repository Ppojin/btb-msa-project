FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/myapp-zuul-gateway-0.1.jar ZuulService.jar
ENTRYPOINT [ "java", "-jar", "ZuulService.jar" ]
# mvn clean
# mvn package
# docker build -t ppojin/mymsa-zuul-gateway --force-rm=true .
# docker push ppojin/mymsa-zuul-gateway