# react-page-hosting

Repository of utilities and example projects for hosting static sites with a Docker-based build server and MinIO object storage. The included `buildServer` is a minimal Docker runner that clones a repo, runs its build, and uploads the produced `dist` (or similar) output to a MinIO bucket for serving.

## Table of contents

- Quick start
- Build server: Docker usage
- Environment variables
- Examples
- How it works
- Development and running locally
- Repository layout
- Troubleshooting
- Contributing
- License

## Quick start

Prerequisites:

- Docker (Engine)
- A running MinIO server (or S3-compatible storage)
- Git

Build the build-server image (from `buildServer` directory):

```sh
cd buildServer
docker build -t buildserver:latest .

# optional: build the slim image if a slim Dockerfile exists
docker build -f Dockerfileslim -t buildserver:slim .
```

Run the build server container with required environment variables (example):

```sh
docker run --rm --link minio \
	-e REPO_URL="https://github.com/your/repo.git" \
	-e JOB_ID="job-123" \
	-e MINIO_ACCESS_KEY=admin \
	-e MINIO_SECRET_KEY=password \
	-e STORAGE_URL="http://minio:9000" \
	-e BUCKET_NAME="sites" \
	buildserver:latest
```

After the run completes the built site will be accessible at:

```
$STORAGE_URL/$BUCKET_NAME/$JOB_ID
```

Adjust `STORAGE_URL` to point at your MinIO endpoint (IP/hostname and port).

## Build server: Docker usage

1. Build image(s):

```sh
cd buildServer
docker build -t buildserver:latest .
```

2. Required environment variables (explained below):

- `REPO_URL` — git URL to clone (HTTPS or SSH if keys are provided)
- `JOB_ID` — unique identifier for this build (used as upload path)
- `MINIO_ACCESS_KEY` — MinIO access key
- `MINIO_SECRET_KEY` — MinIO secret key
- `STORAGE_URL` — base URL of MinIO server, e.g. `http://minio:9000`
- `BUCKET_NAME` — bucket to upload build artifacts into

3. Run with Docker (non-compose):

```sh
docker run --rm --link minio \
	-e REPO_URL="https://github.com/your/repo.git" \
	-e JOB_ID="job-123" \
	-e MINIO_ACCESS_KEY=admin \
	-e MINIO_SECRET_KEY=password \
	-e STORAGE_URL="http://minio:9000" \
	-e BUCKET_NAME="sites" \
	buildserver:latest
```

Notes:

- Use `--link minio` only for legacy Docker networking; with user-defined networks or Docker Compose you can reference the MinIO service by name.
- If you're using an S3 endpoint (not MinIO), set `STORAGE_URL` accordingly and ensure credentials and client support the provider.

## Examples

Docker Compose example (simple):

```yaml
version: '3.8'
services:
	minio:
		image: minio/minio:latest
		environment:
			MINIO_ROOT_USER: admin
			MINIO_ROOT_PASSWORD: password
		volumes:
			- minio-data:/data
		command: server /data
		ports:
			- "9000:9000"

	buildserver:
		image: buildserver:latest
		build:
			context: ./buildServer
		environment:
			REPO_URL: "https://github.com/your/repo.git"
			JOB_ID: "job-123"
			MINIO_ACCESS_KEY: admin
			MINIO_SECRET_KEY: password
			STORAGE_URL: "http://minio:9000"
			BUCKET_NAME: sites
		depends_on:
			- minio

volumes:
	minio-data:
```

After `docker-compose up --build` the `buildserver` service will run and upload the built `dist` into MinIO at `sites/job-123`.

Using the MinIO client (`mc`) to inspect the uploaded files:

```sh
# add alias
mc alias set local http://localhost:9000 admin password

# list bucket contents
mc ls local/sites/job-123
```

## How it works

- The Docker container runs `buildServer/build.sh` (see `buildServer/build.sh`) which:
	1. Clones `REPO_URL` into a temporary directory
	2. Detects the project (common tools: npm/yarn/pnpm) and installs dependencies
	3. Executes the project's build command (typically `npm run build` or equivalent)
	4. Uploads the produced `dist` (or configured output directory) to MinIO under the path `$BUCKET_NAME/$JOB_ID`

The script is intentionally minimal — it assumes standard build outputs and a working build script in the repo being cloned.

## Development and running locally

To run the `build.sh` script locally (without Docker) for debugging:

1. Ensure prerequisites are installed: `git`, `node` (or relevant runtime), and a MinIO server.

2. Export environment variables and run the script from the `buildServer` directory:

```sh
cd buildServer
export REPO_URL="https://github.com/your/repo.git"
export JOB_ID="job-local"
export MINIO_ACCESS_KEY=admin
export MINIO_SECRET_KEY=password
export STORAGE_URL="http://localhost:9000"
export BUCKET_NAME=sites

./build.sh
```

This will print logs to stdout and help you debug cloning, building and uploading steps.

## Repository layout

High level overview of the repo (relevant folders):

- `buildServer/` — Dockerfile(s) and `build.sh` script powering the build runner
- `development/`, `frontend/`, `temporary/`, `minio/`, `router-gateway/` — assorted example apps, scripts, and utilities used for testing and deployment
- `utility/` — helper scripts for file listing and manipulation

See `buildServer/README.md` for directory-specific details about the build runner.

## Troubleshooting

- Build fails during `npm install` or `pnpm install`: check the repo's package manager requirements and ensure the Docker image has necessary tooling (node, pnpm, etc.) or adjust `build.sh` to install the correct manager.
- Upload to MinIO fails: verify `STORAGE_URL`, `MINIO_ACCESS_KEY` and `MINIO_SECRET_KEY`. Confirm MinIO is reachable from the container (networking) and the bucket exists or allow the script to create it.
- Wrong output directory: some projects output to folders other than `dist` (for example `build` or `out`). Edit `buildServer/build.sh` to point to the correct output directory or add logic to detect common output names.

## Contributing

Contributions are welcome. If you add support for new build systems or change the upload behavior, please update `buildServer/README.md` and add a test repo demonstrating the change.

## License

This repository does not include a license file. Add a `LICENSE` file to clarify terms for reuse.

