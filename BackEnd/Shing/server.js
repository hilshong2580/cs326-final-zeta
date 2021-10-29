'use strict';
console.log('Server-side code running');

let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
   app.use(cors())

app.listen(process.env.PORT || port);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'));
  });

app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
  });


app.use(express.static(path.join(__dirname, 'build')));

//import createPost router
const userRouter = require('./routes/createPost')
app.use("/createPost", userRouter)
