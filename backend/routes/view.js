const express = require("express");
const Minio = require("minio");

const router = express.Router();

// MinIO client configuration
const aliasName = process.env.MINIO_ALIAS || "tempcontainer";
const endpointUrl =
  process.env.STORAGE_ENDPOINT_MINIO || "https://tempcontainer.onrender.com";
const accessKey = process.env.STORAGE_ACCESS_KEY || "admin";
const secretKey = process.env.STORAGE_SECRET_KEY || "password";

// parse endpoint
const u = new URL(endpointUrl);
const useSSL = u.protocol === "https:";
const host = u.hostname;
const port = u.port ? parseInt(u.port, 10) : useSSL ? 443 : 80;

// create client
const minioClient = new Minio.Client({
  endPoint: host,
  port: port,
  useSSL: useSSL,
  accessKey: accessKey,
  secretKey: secretKey,
});

// Serve HTML file from MinIO
router.use(async (req, res) => {
  const parts = req.path.split("/").filter(Boolean);
  const id = parts.slice(0).join("/") || "root";
  console.log("Received request for project ID:", req.params.id);
  console.log(req.path);

  // to add-get bucket name form the locations
  const bucketName = "amazon";
  const fileId = id === "root" ? "index.html" : id;
  const fileName = !fileId ? "index.html" : fileId;
  const filePath = `${req.hostname.split(".")[0]}/dist/${fileName}`;
  console.log("Requested file path:", filePath);
  if (res.headersSent) {
    console.log("Headers already sent!");
  }
  // get the file from the storage
  try {
    const objStream = await minioClient.getObject(bucketName, filePath);

    const ext = filePath.split(".").pop().toLowerCase();
    const mimeTypes = {
      html: "text/html",
      js: "application/javascript",
      css: "text/css",
      json: "application/json",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      svg: "image/svg+xml",
      ico: "image/x-icon",
    };
    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.setHeader("Content-Type", contentType);

    objStream.on("error", (err) => {
      console.error("Stream Error:", err);
      if (!res.headersSent) {
        return res.status(500).send("Error while streaming file");
      }
    });

    objStream.pipe(res);

    console.log(`Serving file ${filePath} from bucket ${bucketName}`);
  } catch (err) {
    console.error("Error fetching file:", err);
    return res.status(404).send("File not found");
  }
});

module.exports = router;
