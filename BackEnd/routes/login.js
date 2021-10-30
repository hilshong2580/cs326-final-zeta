'use strict';

const path = require('path')
const express = require('express')
const router = express.Router()


//this is the login page that we start the website
//show the frontend login.html
router.get('/', (req, res)=>{
    console.log("start page")
    //TODO
})

// POST method route to do the login process
//if contain account and match the info
//redirect to main page
router.post('/login', function (req, res) {
  console.log("this is login")
  //TODO
});

//change the forgot password to be go registration account
//may be use the "href" on html, or use the res.redirect to registration page


// POST method route
router.post("/registration", function (req, res) {
  console.log("registration page for new account");
  //TODO
});


module.exports = router




