const express = require('express');
const { Client } = require('minio');

const app = express();
const port = 3000;

const minioClient = new Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'admin',
  secretKey: 'password'
});


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
app.get('/view/:folder/:file', async (req, res) => {
  const bucketName = 'amazon';
  //   const filePath = `${req.params.folder}/${req.params.file}`; // e.g. job-123/dist/index.html
  const filePath = "job-123/dist/index.html"


  try {
    const objStream = await minioClient.getObject(bucketName, filePath);

    res.setHeader('Content-Type', 'text/html');
    objStream.pipe(res);
    console.log("File served successfully");
  } catch (err) {
    console.error(err);
    res.status(404).send('File not found');
  }
});
app.get('/assets/:id', async (req, res) => {
  const bucketName = 'amazon';
  const filePath = `job-123/dist/assets/${req.params.id}`; // <-- interpolate the id

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


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
