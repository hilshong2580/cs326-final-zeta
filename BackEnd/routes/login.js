'use strict';

const path = require('path')
const express = require('express')
const router = express.Router()
router.use(express.static('../FrontEnd', {index: 'login.html'}));

let accounts = new Array(3).fill(null).map((account) => {
  return (account = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
});


// POST method route to do the login process
//if contain account and match the info
//redirect to main page
router.post('/login', function (req, res) {
  console.log("this is login")
  let email = req.body.email;
  let password = req.body.password;
  if (signInCheck(email, password))
    res.send("true") 
  else
    res.send("false")
});


function signInCheck(email, password) {
  //if accounts.json exist same email & password
  // return true

  return false;
}

//change the forgot password to be go registration account
//may be use the "href" on html, or use the res.redirect to registration page

// POST method route
router.post("/registration", function (req, res) {
  console.log("registration page for new account");
  //TODO
  let email = req.body.email;
  if (checkRegist(email)) {
    accounts.push({
      "email": email,
      "password": req.body.password
    })
    res.send("true");
  }
  else
    res.send("false");

});

function checkRegist(email) {
  //if accounts not exist email
  //return true

  return false;
}


module.exports = router

