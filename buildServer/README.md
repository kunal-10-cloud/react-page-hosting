# Build Server

This directory contains a Docker-based build server for automated deployment of static sites. The build server clones a repository, installs dependencies, builds the project, and uploads the build output to a MinIO storage bucket.

## Usage

### 1. Build the Docker Image

```sh
docker build -t buildserver:latest .
```

#### for the slim version
```sh
docker build -f Dockerbuildslim -t buildserver:slim .
```

### 2. Run the Build Server Container

Set the required environment variables:

- `REPO_URL`: The Git repository URL to clone.
- `JOB_ID`: Unique job identifier for the build.
- `MINIO_ACCESS_KEY`: MinIO access key.
- `MINIO_SECRET_KEY`: MinIO secret key.
- `STORAGE_URL`: MinIO server URL (e.g., `http://minio:9000`).
- `BUCKET_NAME`: Name of the bucket to upload the build to.

Example:

```sh
docker run --rm --link minio \
  -e REPO_URL="https://github.com/your/repo.git" \
  -e JOB_ID="job-123" \
  -e MINIO_ACCESS_KEY=admin \
  -e MINIO_SECRET_KEY=password \
  -e STORAGE_URL="http://minio:9000" \
  -e BUCKET_NAME="amazon" \
  buildserver:latest
```

### 3. Output

After completion, your site will be available at:

```
$STORAGE_URL/$BUCKET_NAME/$JOB_ID
```

## How It Works

- The container runs [`buildServer/build.sh`](buildServer/build.sh), which:
  1. Clones the specified repository.
  2. Installs dependencies.
  3. Builds the project.
  4. Uploads the build output (`./dist`) to MinIO.

## Requirements

- Docker
- MinIO server running and accessible
- Valid repository URL

## Files

- [`buildServer/Dockerfile`](buildServer/Dockerfile): Docker image definition.
- [`buildServer/build.sh`](buildServer/build.sh): Build and upload script.

---