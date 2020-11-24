const express = require('express');
const server = express();
const PORT = process.env.port || 4000;

//API
const User = require('../Client/model/class')

server.post("/class", (req, res) => {
 res.json(user[0], "Match has been created")
});


server.get("/class", (req, res) => {
 res.json(user[0])
});


server.put("/class", (req, res) => {
 res.json(user[0], "Match has been updated")
});


server.delete("/class", (req, res) => {
 res.json(user[0], "Match has been deleted")
});

server.listen(PORT, () => {
    console.log(`Server-applikation lytter på http://localhost:${PORT}`)
  })