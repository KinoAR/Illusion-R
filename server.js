const express = require('express');
const reload = require('reload');
const path = require('path');
const app = express();

const gameDir = path.join(__dirname, "game");
app.get("/", (req, res) => {
  res.sendFile(path.join(gameDir, index.html));
});

app.listen(4080, () => {
  console.log("Listening on port 4080");
});

reload(app);