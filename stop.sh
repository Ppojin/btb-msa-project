#!/bin/bash
docker stop rabbitmq
docker stop zipkin
docker stop config
docker stop eureka
docker stop zuul
docker stop user
docker stop qabank
docker stop exam

docker rm rabbitmq
docker rm zipkin
docker rm config
docker rm eureka
docker rm zuul
docker rm user
docker rm qabank
docker rm exam