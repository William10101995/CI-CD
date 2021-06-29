const express = require("express");

const app = express();

app.get("/", async (req, res) => {
    const smell = "Hello World!"
   try {
    
    res.status(200).send(smell);
    return smell
   } catch (error) {
       return semell
   }
});

module.exports = app;
