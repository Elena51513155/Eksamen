const express = require('express');
const server = express();
const PORT = process.env.port || 4000;

//API
const User = require('../Client/model/class.js')

server.post("/class.js", (req, res) => {
 res.json(user[0], "Match has been created")
});


server.get("/class.js", (req, res) => {
 res.json(user[0])
});


server.put("/class.js", (req, res) => {
 res.json(user[0], "Match has been updated")
});


server.delete("/class.js", (req, res) => {
 res.json(user[0], "Match has been deleted")
});

server.listen(PORT, () => {
    console.log(`Server-applikation lytter på http://localhost:${PORT}`)
  })