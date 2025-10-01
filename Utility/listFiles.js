const { Client } = require('minio');

const minioClient = new Client({
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey: 'admin',
  secretKey: 'password'
});

async function listFiles() {
  const bucket = 'amazon';
  const prefix = 'job-123/dist/'; // "folder"

  const stream = minioClient.listObjects(bucket, prefix, true);

  stream.on('data', obj => {
    console.log('File:', obj.name);
  });

  stream.on('end', () => {
    console.log('Done listing.');
  });

  stream.on('error', err => {
    console.error(err);
  });
}

listFiles();
