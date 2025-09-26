# Use official MinIO image
FROM quay.io/minio/minio

# Set environment variables (credentials)
ENV MINIO_ROOT_USER=admin
ENV MINIO_ROOT_PASSWORD=password

# Expose MinIO ports
EXPOSE 9000 9090

# Start MinIO server and console
CMD ["server", "/data", "--console-address", ":9090"]