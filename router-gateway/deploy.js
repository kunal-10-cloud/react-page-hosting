import express from "express";
import { Server } from "socket.io";
import { DefaultAzureCredential } from "@azure/identity";
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";

const app = express();
app.use(express.json());

// --- Config ---
const PORT = 9011;
import http from "http"; // add this near your other imports

const socketServer = http.createServer();
const io = new Server(socketServer, { cors: { origin: "*" } });

socketServer.listen(9022, () => console.log("Socket Server running on 9022"));


// Azure Container App Job configuration
// const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;
const subscriptionId = "94d2e889-3d8b-471c-9147-3f93a0fde15f";
const resourceGroup = "deploydash";
const jobName = "deploydash-job"; // Pre-created ACA Job
const client = new ContainerAppsAPIClient(new DefaultAzureCredential(), subscriptionId);

// --- Socket.io ---
io.on("connection", (socket) => {
  socket.on("subscribe", (channel) => {
    socket.join(channel);
    socket.emit("message", `Joined ${channel}`);
  });
});

io.listen(9002, () => console.log("Socket Server running on 9002"));

// --- API Endpoint to trigger container job ---
app.post("/project", async (req, res) => {
  const { gitURL, slug } = req.body;
  const projectSlug = slug || `proj-${Date.now()}`;

  const params = {
    name: jobName,
    triggerType: "Manual",
    template: {
      containers: [
        {
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
        }
      ]
    }
  };

  await client.jobs.beginStartAndWait(resourceGroup, jobName, params);

  // Simulate log update locally (you can replace this later with real logs)
  io.to(`logs:${projectSlug}`).emit("message", `Job started for ${projectSlug}`);

  res.json({
    status: "queued",
    // data: { projectSlug, url: `https://${projectSlug}.yourdomain.com` }
    data: { projectSlug, url: `http://localhost:443/view/${projectSlug}` }
    
  });
});

app.listen(PORT, () => console.log(`API Server running on ${PORT}`));
