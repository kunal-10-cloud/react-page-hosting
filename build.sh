#!/bin/bash
set -e

echo "#step-1 \t cloning repo: $REPO_URL"
git clone --depth=1 "$REPO_URL" repo
cd repo 

echo "#step-2 \t installing dependencies"
npm install --legacy-peer-deps

echo "#step-3 \t Building project"
npm run build

echo "#step-4 \t uploading the build server"
mc alias set minio http://minio:9000 $MINIO_ACCESS_KEY $MINIO_SECRET_KEY
# check if it does not exist and create if not yaaa
mc mb -p minio/amazon
mc cp -r ./dist minio/amazon/$JOB_ID/

echo "#step-5 \t Build completed, your site is live at http://minio:9000/amazon/$JOB_ID"
echo "#step-6 \t Cleaning up => exiting"