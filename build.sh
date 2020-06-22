#!/bin/bash
cd back-config-springboot
mvn clean compile package -DskipTests
## build
docker build -t ppojin/config .
docker push ppojin/config

cd ../back-eureka-springboot
mvn clean compile package -DskipTests
## build
docker build -t ppojin/eureka .
docker push ppojin/eureka

cd ../back-zuul-springboot
mvn clean compile package -DskipTests
## build
docker build -t ppojin/zuul .
docker push ppojin/zuul

cd ../api-user-springboot
mvn clean compile package -DskipTests
## build
docker build -t ppojin/user .
docker push ppojin/user

cd ../api-qabank-springboot
mvn clean compile package -DskipTests
## build
docker build -t ppojin/qabank .
docker push ppojin/qabank

# cd ../api-exam-springboot
# mvn clean compile package
# ## build
# docker build -t ppojin/exam .

cd ../api-result-springboot
mvn clean compile package -DskipTests
## build
docker build -t ppojin/result .
docker push ppojin/result

../run.sh