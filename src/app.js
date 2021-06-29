const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  try {
    res.status(200).send("Hello World!");
  } catch (error) {
    res.status(200).send("Hello World!")
  }
});

module.exports = app;
