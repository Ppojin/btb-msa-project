#!/bin/bash
cd back-config-springboot
mvn clean

cd ../back-eureka-springboot
mvn clean

cd ../back-zuul-springboot
mvn clean

cd ../api-user-springboot
mvn clean

cd ../api-qabank-springboot
mvn clean

cd ../api-exam-springboot
mvn clean

cd ../api-result-springboot
mvn clean