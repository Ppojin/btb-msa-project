#!/bin/bash
cd back-config-springboot
mvn clean compile package
## build
docker build -t config back-config-springboot/.

cd ../back-eureka-springboot
mvn clean compile package
## build
docker build -t eureka back-eureka-springboot/.

cd ../back-zuul-springboot
mvn clean compile package
## build
docker build -t zuul back-zuul-springboot/.

cd ../api-user-springboot
mvn clean compile package
## build
docker build -t user api-user-springboot/.

cd ../api-qabank-springboot
mvn clean compile package
## build
docker build -t qabank api-qabank-springboot/.

cd ../api-exam-springboot
mvn clean compile package
## build
docker build -t exam api-exam-springboot/.

cd ../api-result-springboot
mvn clean compile package
## build
docker build -t result api-result-springboot/.