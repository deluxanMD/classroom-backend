const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to classroom backend" });
});

app.listen(3000);
