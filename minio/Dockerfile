# Stage 1: MinIO
FROM quay.io/minio/minio:RELEASE.2025-09-07T16-13-09Z AS minio

# Stage 2: Nginx
FROM nginx:alpine

# Install bash for any scripting if needed
RUN apk add --no-cache bash

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy MinIO binary from first stage
COPY --from=minio /usr/bin/minio /usr/bin/minio

# MinIO credentials
ENV MINIO_ROOT_USER=admin
ENV MINIO_ROOT_PASSWORD=password

# Internal ports for MinIO
ENV MINIO_ADDRESS=":9001"
ENV MINIO_CONSOLE_ADDRESS=":9002"

# Expose internal API port (Console is proxied)
EXPOSE 9001 9002

# Start both MinIO and Nginx (no 'sh -c', just a bash script is OK)
CMD ["bash", "-c", "minio server /data --address :9001 --console-address :9002 & nginx -g 'daemon off;'"]
