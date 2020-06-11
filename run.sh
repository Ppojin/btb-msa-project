#!/bin/bash

#network
docker network create my-net

#rabbitmq
docker run -d --name rabbitmq \
-p 9999:15672 -p 5672:5672 -p 15671:15671 -p 5671:5671 -p 4369:4369 \
--restart=unless-stopped \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=admin \
--network my-net \
rabbitmq:management
## export ip
ppojin/rabbitmq=$(docker inspect rabbitmq | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
echo "rabbitmq = ${rabbitmq}"


# zipkin
docker run -d --name zipkin -p 9411:9411 openzipkin/zipkin
## export ip
zipkin=$(docker inspect zipkin | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
echo "zipkin = ${zipkin}"

# config
## build
# docker build -t config back-config-springboot/.
## run
docker run -d --name config -p 8012:8012 \
-e "spring.rabbitmq.host=${rabbitmq}" \
--network my-net \
config
## export ip
config=$(docker inspect config | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
echo "config = ${config}"

sleep 30s

# eureka
## build
# docker build -t eureka back-eureka-springboot/.
## run
docker run -d --name eureka -p 8010:8010 \
-e "eureka.client.service-url.defaultZone=http://localhost:8010/eureka" \
-e "spring.cloud.config.uri=http://${config}:8012" \
--network my-net \
eureka
## export ip
eureka=$(docker inspect eureka | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
echo "eureka = ${eureka}"

# zuul
## build
# docker build -t zuul back-zuul-springboot/.
## run
docker run -d --name zuul -p 8011:8011 \
-e "spring.rabbitmq.host=${rabbitmq}" \
-e "spring.cloud.config.uri=http://${config}:8012" \
-e "eureka.client.service-url.defaultZone=http://${eureka}:8010/eureka" \
-e "spring.cloud.config.name=docker" \
--network my-net \
zuul

# user
## build
# docker build -t user api-user-springboot/.
## run
docker run --name user -d \
-p 10000:10000 \
-e "spring.rabbitmq.host=${rabbitmq}" \
-e "spring.cloud.config.uri=http://${config}:8012" \
-e "eureka.client.service-url.defaultZone=http://${eureka}:8010/eureka" \
-e "server.port=10000" \
-e "spring.cloud.config.name=docker" \
--network my-net \
user

# qabank
## build
# docker build -t qabank api-qabank-springboot/.
## run
docker run --name qabank -d \
-p 20000:20000 \
-e "spring.rabbitmq.host=${rabbitmq}" \
-e "spring.cloud.config.uri=http://${config}:8012" \
-e "eureka.client.service-url.defaultZone=http://${eureka}:8010/eureka" \
-e "server.port=20000" \
-e "spring.cloud.config.name=docker" \
--network my-net \
qabank

# # exam
# ## build
# # docker build -t exam api-exam-springboot/.
# ## run
# docker run --name exam -d \
# -p 30000:30000 \
# -e "spring.rabbitmq.host=${rabbitmq}" \
# -e "spring.cloud.config.uri=http://${config}:8012" \
# -e "eureka.client.service-url.defaultZone=http://${eureka}:8010/eureka" \
# -e "server.port=30000" \
# -e "spring.cloud.config.name=docker" \
# --network my-net \
# exam

# result
## build
# docker build -t result api-result-springboot/.
## run
docker run --name result -d \
-p 40000:40000 \
-e "spring.rabbitmq.host=${rabbitmq}" \
-e "spring.cloud.config.uri=http://${config}:8012" \
-e "eureka.client.service-url.defaultZone=http://${eureka}:8010/eureka" \
-e "server.port=40000" \
-e "spring.cloud.config.name=docker" \
--network my-net \
result

echo "config = ${config}"
echo "eureka = ${eureka}"
echo "zipkin = ${zipkin}"
echo "rabbitmq = ${rabbitmq}"