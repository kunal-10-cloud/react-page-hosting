#!/bin/bash

# Replace $PORT in nginx template
envsubst '$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Start MinIO in background
minio server /data --address :9000 --console-address :9001 &

# Start Nginx in foreground
nginx -g "daemon off;"
