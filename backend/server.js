// libraries
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const port = 7830
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// routes   
const deployRoute = require("./routes/deploy.js");
const viewRoute = require("./routes/view.js");


// mount routes
app.use("/deploy", deployRoute);
// app.use("/view", viewRoute);
app.use((req, res, next) => {
  console.log("Subdomains:", req.subdomains, req.get('host') , req.hostname);
  const hostname = req.hostname;
  const subdomain = hostname.split('.')[0]
  // task :- logic for checking the subdomain existing in the storage can be done either 
  // here or in the view route itself
  if (subdomain && subdomain !== 'localhost') {
    console.log("hi")
    viewRoute(req, res, next);
  } else{
    next()
  }
});

app.get("/health", (req , res) => {
  res.status(200).send("Server is healthy");
})

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        return;
    }
    console.log(`Server is running on port http://localhost:${port}`);
});

