const express = require("express");
const path = require("path");
const app = express();

// server static file from react app
app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "frontend/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);
