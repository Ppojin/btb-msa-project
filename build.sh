#!/bin/bash
cd back-config-springboot
mvn clean compile package

cd ../back-eureka-springboot
mvn clean compile package

cd ../back-zuul-springboot
mvn clean compile package

cd ../api-user-springboot
mvn clean compile package

cd ../api-qabank-springboot
mvn clean compile package

cd ../api-exam-springboot
mvn clean compile package

cd ../api-result-springboot
mvn clean compile package