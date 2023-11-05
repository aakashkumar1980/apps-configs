#!/bin/sh

echo "CLEANING UP..."
# clean up
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker-compose down

docker volume rm $(docker volume ls -q)
docker system prune -f

