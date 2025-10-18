// Enhanced MinIO File Lister
const { Client } = require('minio');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // npm install chalk (optional, for color)

const minioClient = new Client({
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey: 'admin',
  secretKey: 'password'
});

async function listFiles({
  bucket = 'amazon',
  prefix = 'job-123/dist/',
  recursive = true,
  filterExt = null, // e.g. '.js' or '.zip'
  downloadTo = null // e.g. './downloads'
} = {}) {
  try {
    // Check if bucket exists
    const exists = await minioClient.bucketExists(bucket);
    if (!exists) {
      console.error(chalk.red(`Bucket "${bucket}" does not exist.`));
      return;
    }

    console.log(chalk.blue(`📦 Listing files in bucket: ${bucket}/${prefix}`));

    const stream = minioClient.listObjects(bucket, prefix, recursive);

    let totalFiles = 0;
    let totalSize = 0;

    stream.on('data', async obj => {
      if (filterExt && !obj.name.endsWith(filterExt)) return;

      totalFiles++;
      totalSize += obj.size;

      console.log(`${chalk.green('•')} ${obj.name} (${(obj.size / 1024).toFixed(2)} KB)`);

      if (downloadTo) {
        await downloadFile(bucket, obj.name, downloadTo);
      }
    });

    stream.on('end', () => {
      console.log(chalk.yellow(`\n✅ Done listing.`));
      console.log(chalk.cyan(`Total files: ${totalFiles}`));
      console.log(chalk.cyan(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`));
    });

    stream.on('error', err => {
      console.error(chalk.red('❌ Error listing objects:'), err);
    });

  } catch (err) {
    console.error(chalk.red('❌ Unexpected error:'), err);
  }
}

// // Example usage:
// listFiles({
//   bucket: 'amazon',
//   prefix: 'job-123/dist/',
//   recursive: true,
//   filterExt: '.js',     // optional filter
//   downloadTo: './downloads' // optional download path
// });
