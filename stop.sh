#!/bin/bash
docker-compose -f docker-compose-config.yml down
docker-compose -f docker-compose-msaback.yml down
docker-compose -f docker-compose-api.yml down