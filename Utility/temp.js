// minio-client.js
const Minio = require('minio');
const { URL } = require('url');

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

// Example: list buckets to verify connection (like `mc ls`)
async function createBucket() {
  try {
    await client.makeBucket('amazon', 'us-east-1'); // region required
    console.log('Bucket "somthing" created successfully.');
  } catch (err) {
    if (err.code === 'BucketAlreadyOwnedByYou') {
      console.log('Bucket "somthing" already exists.');
    } else {
      console.error('Error creating bucket:', err);
    }
  }
}

createBucket();


async function listBuckets() {
  try {
    const buckets = await client.listBuckets();
    console.log(`Connected to ${aliasName} (${endpointUrl})`);
    console.log('Buckets:');
    for (const b of buckets) console.log('-', b.name);
  } catch (err) {
    console.error('Error listing buckets:', err);
  }
}

listBuckets();
