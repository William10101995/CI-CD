const express = require("express");

const app = express();

const op = require("./operacion");

app.get("/", async (req, res) => {
  const producto = op.Producto(2, 3);
  
  res.status(200).send(`El Resultado del Producto es ${producto}`);
});

module.exports = app;
