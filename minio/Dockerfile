# Use official MinIO image
FROM quay.io/minio/minio

# Set environment variables (credentials)
ENV MINIO_ROOT_USER=admin
ENV MINIO_ROOT_PASSWORD=password

# Render assigns PORT dynamically, so MinIO Console must bind to it
# MinIO API port is kept internal as 9001 (optional)
ENV MINIO_ADDRESS=":9001"
ENV MINIO_CONSOLE_ADDRESS=":${PORT}"

# Expose only internal API port (Render will auto-expose $PORT)
EXPOSE 9001

# Start MinIO server
CMD ["sh", "-c", "minio server /data --address $MINIO_ADDRESS --console-address $MINIO_CONSOLE_ADDRESS"]
