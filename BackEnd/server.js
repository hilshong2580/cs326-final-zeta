'use strict';
console.log('Server-side code running');


let path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
   app.use(cors())

app.listen(process.env.PORT || port);


app.get('/', (req, res) => {
    res.redirect("/login")
  });

// app.get('/login', function(req, res) {
//     res.sendFile(path.join(__dirname, '/login.html'));
//   });

// app.post('/login', (req, res) => {
//     let username = req.body.username;
//     let password = req.body.password;
//   });


//import createPost router
const userRouter = require('./routes/createPost')
app.use("/createPost", userRouter)

//import login router
const userLogin = require('./routes/login')
app.use("/login", userLogin)