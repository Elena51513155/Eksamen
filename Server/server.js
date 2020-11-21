//API
const User = require('../Client/class')

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
