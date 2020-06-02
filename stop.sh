#!/bin/bash
# docker stop rabbitmq
# docker stop zipkin
# docker stop config
# docker stop eureka
# docker stop zuul
# docker stop user
# docker stop qabank
# docker stop exam
# docker stop result

docker rm rabbitmq -f
docker rm zipkin -f
docker rm config -f
docker rm eureka -f
docker rm zuul -f
docker rm user -f
docker rm qabank -f
docker rm exam -f
docker rm result -f