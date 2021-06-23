const express = require("express");
const path = require("path");
const app = express();

const staticPath = path.join(__dirname, "/../build");
const port = process.env.PORT || 8080;

app.use(express.static(staticPath));

app.get("/", function (req, res) {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
