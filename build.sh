#!/bin/bash
cd back-config-springboot
mvn clean compile package
## build
docker build -t ppojin/config .

cd ../back-eureka-springboot
mvn clean compile package
## build
docker build -t ppojin/eureka .

cd ../back-zuul-springboot
mvn clean compile package
## build
docker build -t ppojin/zuul .

cd ../api-user-springboot
mvn clean compile package
## build
docker build -t ppojin/user .

cd ../api-qabank-springboot
mvn clean compile package
## build
docker build -t ppojin/qabank .

# cd ../api-exam-springboot
# mvn clean compile package
# ## build
# docker build -t ppojin/exam .

cd ../api-result-springboot
mvn clean compile package
## build
docker build -t ppojin/result .