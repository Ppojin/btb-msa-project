#!/bin/bash

docker stop user
docker rm user
docker rmi user

rabbitmq=$(docker inspect rabbitmq | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
zipkin=$(docker inspect zipkin | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
config=$(docker inspect config | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
eureka=$(docker inspect eureka | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
echo "rabbitmq = ${rabbitmq}"
echo "zipkin = ${zipkin}"
echo "config = ${config}"
echo "eureka = ${eureka}"

cd api-user-springboot
mvn clean compile package

cd ../

# user
## build
docker build -t user api-user-springboot/.
## run
docker run --name user \
-p 10000:10000 \
-e "spring.rabbitmq.host=${rabbitmq}" \
-e "spring.cloud.config.uri=http://${config}:8012" \
-e "eureka.client.service-url.defaultZone=http://${eureka}:8010/eureka" \
-e "server.port=10000" \
-e "spring.cloud.config.name=docker" \
--network my-net \
user