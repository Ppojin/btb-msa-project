#!/bin/bash

docker stop result
docker rm result
docker rmi result

rabbitmq=$(docker inspect rabbitmq | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
zipkin=$(docker inspect zipkin | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
config=$(docker inspect config | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
eureka=$(docker inspect eureka | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
echo "rabbitmq = ${rabbitmq}"
echo "zipkin = ${zipkin}"
echo "config = ${config}"
echo "eureka = ${eureka}"

cd api-result-springboot
mvn clean
mvn compile
mvn package

cd ../

# result
## build
docker build -t result api-result-springboot/.
## run
docker run --name result \
-p 30000:30000 \
-e "spring.rabbitmq.host=${rabbitmq}" \
-e "spring.cloud.config.uri=http://${config}:8012" \
-e "eureka.client.service-url.defaultZone=http://${eureka}:8010/eureka" \
-e "server.port=30000" \
-e "spring.cloud.config.name=docker" \
--network my-net \
result