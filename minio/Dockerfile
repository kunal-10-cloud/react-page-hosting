FROM quay.io/minio/minio:latest

# Set credentials and custom console port
ENV MINIO_ROOT_USER=admin
ENV MINIO_ROOT_PASSWORD=password
ENV MINIO_CONSOLE_ADDRESS=":${PORT}"

# Expose API and console ports
EXPOSE 9000

# Run MinIO server with console on custom port
CMD ["server", "/data", "--console-address", ":${PORT}"]
