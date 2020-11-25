const express = require('express');
const app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
const PORT = process.env.port || 3000;
var path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
const { request } = require('express');
//1 var mysql = require('mysql'); //
//2 myStorage = window.localStorage;


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

/*måske skal vi have UPDATE ind her, når personen er logget ind, kunne det se sådan her ud:
app.put("/login":id", (req, res) => {
    readFile(data => {
        //add the new user
         const userId = req.params["id"];
        data[userId] = req.body;

        writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send("user id:${userId} updates");
     })
   })
}) Evt json filer med user 

// DELETE
app.delete('/users/:id', (req, res) => {
  readFile(data => {
    // add the new user
    const userId = req.params['id'];
    delete data[userId];

    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send(`users id:${userId} removed`);
    });
  }, true);
}); */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '../../Client/view/register.html'));
});

app.post("/register-user", (req, res) => {

    var username = req.body.username;
    var password = req.body.password;

    /* Make database call here where you store the user - do this in MySQL,
    jeg mener vi skal store som json filer,
    i opgaven står  */

    // setItem here

//2 window.localStorage.setItem("username", username); // sidste er en DOM key + DOM value
//Men i opgaven skal vi kun gemme log.in status i locale storage (klient side)


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
/*Evt nedestående til log-out, kobles op til en log-out knap på profile side
ændrer session status i local storage til: logged out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
  */

app.listen(PORT)
    console.log(`Server-applikation lytter på http://localhost:${PORT}`)
  

