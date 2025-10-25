const express = require('express');
const Minio = require('minio');

const router = express.Router();


// MinIO client configuration
const aliasName = process.env.MINIO_ALIAS || 'tempcontainer';
const endpointUrl = process.env.STORAGE_ENDPOINT || 'https://tempcontainer.onrender.com';
const accessKey = process.env.STORAGE_ACCESS_KEY || 'admin';
const secretKey = process.env.STORAGE_SECRET_KEY || 'password';

// parse endpoint
const u = new URL(endpointUrl);
const useSSL = u.protocol === 'https:';
const host = u.hostname;
const port = u.port ? parseInt(u.port, 10) : (useSSL ? 443 : 80);

// create client
const minioClient = new Minio.Client({
  endPoint: host,
  port: port,
  useSSL: useSSL,
  accessKey: accessKey,
  secretKey: secretKey
});

// Serve HTML file from MinIO
router.get('/:id', async (req, res) => {
    // to add-get bucket name form the locations
    const bucketName = 'amazon';
    const filePath = req.params.id + '/dist/index.html'; // e.g. proj-1760673962859/dist/index.html
    console.log("Requested file path:", filePath);

    // get the file from the storage
    try {
        const objStream = await minioClient.getObject(bucketName, filePath);

        res.setHeader('Content-Type', `text/html`);

        objStream.on('error', (err) => {
            console.error('Stream Error:', err);
            if (!res.headersSent) res.status(500).send('Error while streaming file');
        })

        objStream.pipe(res);

        console.log(`Serving file ${filePath} from bucket ${bucketName}`);
    } catch (err) {
        console.error('Error fetching file:', err);
        res.status(404).send('File not found');
    }
});


module.exports = router;