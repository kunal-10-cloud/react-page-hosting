const express = require("express")

const app = express()

const port = process.env.PORT || 3000

const jobID , REMO_REPO = process.env


// anythign that comes in as json, convert it to a js object
app.use(express.json())



// any get request to any route
app.get("*", (req, res) => {
  console.log("GET request made to:", req.path)
  res.send("Hello from Express!")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
