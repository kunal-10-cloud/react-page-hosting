#!/bin/sh
export MINIO_CONSOLE_ADDRESS=":10000"   # Render assigned port
export MINIO_ADDRESS=":10001"           # Optional if API needed
minio server /data
