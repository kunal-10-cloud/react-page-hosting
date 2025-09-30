FROM quay.io/minio/minio:RELEASE.2025-09-07T16-13-09Z

# Install Nginx and envsubst
USER root
RUN apt-get update && apt-get install -y \
    nginx \
    bash \
    gettext-base \
 && rm -rf /var/lib/apt/lists/*

# Copy Nginx template (with $PORT)
COPY nginx.conf /etc/nginx/nginx.conf

# Copy entrypoint script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# MinIO credentials
ENV MINIO_ROOT_USER=admin
ENV MINIO_ROOT_PASSWORD=password

# Internal ports
ENV MINIO_ADDRESS=":9000"
ENV MINIO_CONSOLE_ADDRESS=":9001"

# Expose internal ports
EXPOSE 9000 9001

# Start both MinIO and Nginx via script
CMD ["/start.sh"]
