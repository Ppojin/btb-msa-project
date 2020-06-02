#!/bin/bash

#network
docker network create my-net

#rabbitmq
docker run -d --name rabbitmq \
-p 9090:15672 -p 5672:5672 -p 15671:15671 -p 5671:5671 -p 4369:4369 \
--restart=unless-stopped \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=admin \
--network my-net \
rabbitmq:management
## export ip
rabbitmq=$(docker inspect rabbitmq | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)


# zipkin
docker run -d --name zipkin -p 9411:9411 openzipkin/zipkin
## export ip
zipkin=$(docker inspect zipkin | grep IPAddress | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | head -1)
