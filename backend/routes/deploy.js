import express from "express";
import { DefaultAzureCredential } from "@azure/identity";
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";

const router = express.Router();


// Azure Container App Job configuration
const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;
const resourceGroup = process.env.AZURE_RESOURCE_GROUP;
const jobName = process.env.AZURE_JOB_NAME_DEPLOY;
const client = new ContainerAppsAPIClient(new DefaultAzureCredential(), subscriptionId);


// --- API Endpoint to trigger container job ---
router.post("/", async (req, res) => {
  const { gitURL, slug } = req.body;
  const projectSlug = slug || `proj-${Date.now()}`;

  const params = {
    name: jobName,
    triggerType: "Manual",
    template: {
      containers: [{
          name: "builder-image",
          image: `deloydashimage.azurecr.io/buildserver:slim`,
          env: [
            { name: "REPO_URL", value: gitURL },
            { name: "JOB_ID", value: projectSlug },
            { name: "STORAGE_URL", value: "https://tempcontainer.onrender.com" },
            { name: "STORAGE_ACCESS_KEY", value: "admin" },
            { name: "STORAGE_SECRET_KEY", value: "password" },
            { name: "BUCKET_NAME", value: "amazon" },
          ]
        }]
    }};

  await client.jobs.beginStartAndWait(resourceGroup, jobName, params);
  res.json({
    status: "queued",
    data: { projectSlug, url: `http://localhost:443/view/${projectSlug}` }
    
  });
});

module.exports = router;