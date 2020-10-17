#!/usr/bin/env bash

docker stop nginx
docker run -d --rm --name nginx -v $(pwd)/dist:/usr/share/nginx/html -p 80:80 nginx