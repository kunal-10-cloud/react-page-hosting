const express = require('express');
const Minio = require('minio');

const app = express();
// const port = 3000;

// const minioClient = new Client({
//   endPoint: 'localhost',
//   port: 9000,
//   useSSL: false,
//   accessKey: 'admin',
//   secretKey: 'password'
// });


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
  port: 443,
  useSSL: useSSL,
  accessKey: accessKey,
  secretKey: secretKey
});

const minioClient = client;

// app.get('/file/:fileid', async (req, res) => {
//   const bucketName = 'your-bucket-name';
//   const fileId = req.params.fileid;

//   try {
//     const objStream = await minioClient.getObject(bucketName, fileId);

//     res.setHeader('Content-Disposition', `attachment; filename="${fileId}"`);
//     objStream.pipe(res);
//   } catch (err) {
//     console.error(err);
//     res.status(404).send('File not found');
//   }
// });

// Serve HTML file from MinIO
// app.get('/view/:folder/:file', async (req, res) => {
app.get('/view/:id', async (req, res) => {

  const bucketName = 'amazon';
  //   const filePath = `${req.params.folder}/${req.params.file}`; // e.g. job-123/dist/index.html
  const filePath = req.params.id + '/dist/index.html'; // e.g. proj-1760673962859/dist/index.html
  console.log("Requested file path:", filePath);


  try {
    const objStream = await minioClient.getObject(bucketName, filePath);

    res.setHeader('Content-Type', 'text/html');

    objStream.on('error', (err) => {
      console.error('Stream error:', err);
      if (!res.headersSent) res.status(500).send('Error while streaming file');
    });

    objStream.pipe(res);


    console.log("File served successfully");
  } catch (err) {
    console.error(err);
    res.status(404).send('File not found');
  }
});


app.get('/assets/:id', async (req, res) => {
  const bucketName = 'amazon';
  const filePath = `proj-1760862115456/dist/assets/${req.params.id}`; // <-- interpolate the id

  try {
    const objStream = await minioClient.getObject(bucketName, filePath);

    // Set proper content type based on file extension
    const ext = req.params.id.split('.').pop();
    let contentType = 'application/octet-stream'; // default fallback
    if (ext === 'js') contentType = 'application/javascript';
    else if (ext === 'css') contentType = 'text/css';
    else if (ext === 'html') contentType = 'text/html';
    else if (ext === 'json') contentType = 'application/json';

    res.setHeader('Content-Type', contentType);
    objStream.pipe(res);

    console.log(`File ${filePath} served successfully`);
  } catch (err) {
    console.error(err);
    res.status(404).send('File not found');
  }
});


app.listen(5000, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }
  console.log(`Server running at http://localhost:${3000}`);
});
