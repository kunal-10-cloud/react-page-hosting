#!/bin/bash
set -e

# === Common setup ===
echo "==========================================="
echo "🚀 Build Script Started"
echo "Repo URL: $REPO_URL"
echo "Project ID: $JOB_ID"
echo "==========================================="

echo "#step-1 \t Cloning repository: $REPO_URL"
if [ -z "$REPO_URL" ]; then
  echo "❌ ERROR: REPO_URL is not set. Exiting."
  exit 1
fi
git clone --depth=1 "$REPO_URL" repo
cd repo

echo "#step-2 \t Detecting project type..."
if [ -f "package.json" ]; then
  echo "📦 Detected Node.js project."
  PROJECT_TYPE="node"
else
  echo "🧱 Detected static HTML/CSS/JS project."
  PROJECT_TYPE="static"
fi

if [ "$PROJECT_TYPE" = "node" ]; then
  echo "#step-3 \t Installing dependencies"
  
  if [ -f "package-lock.json" ]; then
    echo "Using npm ci for faster, reproducible installs..."
    npm ci --legacy-peer-deps
  else
    npm install --legacy-peer-deps
  fi

  echo "#step-4 \t Building project"
  if npm run | grep -q "build"; then
    npm run build
  else
    echo "⚠️ No build script found in package.json. Skipping build."
  fi

  BUILD_DIR="./dist"
  [ ! -d "$BUILD_DIR" ] && BUILD_DIR="./build"
else
  echo "#step-3 \t Skipping npm install — static project detected."
  BUILD_DIR="."
fi

echo "#step-5 \t Uploading build to Storage"
if [ -z "$STORAGE_URL" ] || [ -z "$STORAGE_ACCESS_KEY" ] || [ -z "$STORAGE_SECRET_KEY" ] || [ -z "$BUCKET_NAME" ]; then
  echo "❌ ERROR: Storage credentials or bucket info missing."
  exit 1
fi

mc alias set minio "$STORAGE_URL" "$STORAGE_ACCESS_KEY" "$STORAGE_SECRET_KEY"

mc mb -p "minio/$BUCKET_NAME" || echo "Bucket $BUCKET_NAME already exists, skipping creation."

echo "#step-6 \t Uploading files to bucket..."
mc cp -r "$BUILD_DIR" "minio/$BUCKET_NAME/$JOB_ID/"

echo "==========================================="
echo "✅ Build completed successfully!"
echo "🌐 Your site is live at:"
echo "$JOB_ID.$STORAGE_URL/$BUCKET_NAME"
echo "==========================================="
