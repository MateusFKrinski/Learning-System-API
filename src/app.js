const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.status(200).send({ message: "Operating" });
});

module.exports = app;
