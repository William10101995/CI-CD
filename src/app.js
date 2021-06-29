const express = require("express");

const app = express();

const op = require("./operacion");

app.get("/", async (req, res) => {
  const suma = op.Producto(2, 3);
  res.status(200).send(`El Resultado de la Suma es ${suma}`);
});

module.exports = app;
