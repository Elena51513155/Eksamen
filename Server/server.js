const express = require('express');
const app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
const PORT = process.env.port || 3000;
var path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
const { request } = require('express');
//1 var mysql = require('mysql'); //

//API
/*const User = require('../Client/model/class')
*/

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/login", (req, res) => {

    if(req.session.loggedin) {
        res.redirect('/profile');
    } 

    res.sendFile(path.join(__dirname + '../../Client/view/login.html'));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '../../Client/view/register.html'));
});

app.post("/register-user", (req, res) => {

    var username = req.body.name1;
    var password = req.body.pw;

    /* Make database call here where you store the user - do this in MySQL */

    // setItem here

    //localStorage.setItem("username", username);

    /* Check if user exist */
    
    req.session.loggedin = true;

    res.redirect('/profile');
});

app.get('/profile', function(req, res) {
    if(req.session.loggedin) {
        res.send('You are now logged in.');
    } else {
        res.send('Please log in');
    }
});

/*
server.put("/class", (req, res) => {
 res.json(user[0], "Match has been updated")
});


server.delete("/class", (req, res) => {
 res.json(user[0], "Match has been deleted")
});*/

app.listen(PORT)
    console.log(`Server-applikation lytter på http://localhost:${PORT}`)
  

