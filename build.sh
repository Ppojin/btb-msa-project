#!/bin/bash
cd back-config-springboot
mvn clean
mvn compile
mvn package

cd ../back-eureka-springboot
mvn clean
mvn compile
mvn package

cd ../back-zuul-springboot
mvn clean
mvn compile
mvn package

cd ../api-user-springboot
mvn clean
mvn compile
mvn package

cd ../api-qabank-springboot
mvn clean
mvn compile
mvn package

cd ../api-exam-springboot
mvn clean
mvn compile
mvn package

cd ../api-result-springboot
mvn clean
mvn compile
mvn package