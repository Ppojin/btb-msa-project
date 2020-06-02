#!/bin/bash
cd back-config-springboot
mvn clean compile package
## build
docker build -t config .

cd ../back-eureka-springboot
mvn clean compile package
## build
docker build -t eureka .

cd ../back-zuul-springboot
mvn clean compile package
## build
docker build -t zuul .

cd ../api-user-springboot
mvn clean compile package
## build
docker build -t user .

cd ../api-qabank-springboot
mvn clean compile package
## build
docker build -t qabank .

cd ../api-exam-springboot
mvn clean compile package
## build
docker build -t exam .

cd ../api-result-springboot
mvn clean compile package
## build
docker build -t result .