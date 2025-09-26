const express = require("express")
const exce = require("child_process").exec
const cors = require("cors")

// enable cors for all origins
const corsOptions = {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions))

const app = express()

const port = process.env.PORT || 3000

// const jobID , REMO_REPO = process.env


// anythign that comes in as json, convert it to a js object
app.use(express.json())


// deploy endpoint
app.post('/deploy', (res , req) => {
  console.log("Deploy request received")
  const {gihub_url} = req.body
  console.log("GitHub URL:", gihub_url)

  // run the deploy script
  exce(`docker run --rm --link minio \
  -e REPO_URL=${gihub_url}\
  -e JOB_ID="job-123" \
  -e MINIO_ACCESS_KEY=admin \
  -e MINIO_SECRET_KEY=password \
  demoimage`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing deploy script: ${error.message}`)
      return req.status(500).send("Deployment failed")
    }
    if (stderr) {
      console.error(`Deploy script stderr: ${stderr}`)
      return req.status(500).send("Deployment encountered issues")
    }
    console.log(`Deploy script output: ${stdout}`)
    req.status(200).send("Deployment successful")
  })
})

app.get('/web/:id', (req, res) => {
  const jobId = req.params.id;
  console.log("Web request for job ID:", jobId);

  const filePath = `/amazon/${jobId}/dist/index.html`;

});

// any get request to any route
app.get("*", (req, res) => {
  console.log("GET request made to:", req.path)
  res.send("Hello from Express!")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
