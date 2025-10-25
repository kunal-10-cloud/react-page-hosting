const Minio = require('minio');

// const minioClient = new Client({
//   endPoint: '127.0.0.1',
//   port: 9000,
//   useSSL: false,
//   accessKey: 'admin',
//   secretKey: 'password'
// });
// Replace these with your values (mirrors: mc alias set ...)
const aliasName = 'tempcontainer';
const endpointUrl = 'https://tempcontainer.onrender.com';
const accessKey = 'admin';
const secretKey = 'password';

// parse endpoint
const u = new URL(endpointUrl);
const useSSL = u.protocol === 'https:';
const host = u.hostname;
const port = u.port ? parseInt(u.port, 10) : (useSSL ? 443 : 80);

// create client (this is your "alias" as a JS object)
const client = new Minio.Client({
  endPoint: host,
  port: port,
  useSSL: useSSL,
  accessKey: accessKey,
  secretKey: secretKey
});
const minioClient = client;

async function listFiles() {
  const bucket = 'amazon';
  // const prefix = 'job-123/dist/'; // "folder"
  const prefix = ''; // "folder"

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
