// libraries
const express = require("express");
require("dotenv").config();

const port = 7830
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// routes   
const deployRoute = require("./routes/deploy.js");
const viewRoute = require("./routes/view.js");


// mount routes
app.use("/deploy", deployRoute);
app.use("/view", viewRoute);



app.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        return;
    }
    console.log(`Server is running on port ${port}`);
});

