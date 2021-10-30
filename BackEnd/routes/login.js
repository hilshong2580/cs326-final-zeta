'use strict';

const path = require('path')
const express = require('express')
const router = express.Router()

//this is the login page that we start the website
//show the frontend login.html
router.get('/', (req, res)=>{
    console.log("this is login")
    //TODO
})

// POST method route to do the login process
//if contain account and match the info
//redirect to main page
router.post('/login', function (req, res) {
  //TODO
  // let username = req.body.username;
  // let password = req.body.password;
});

//change the forgot password to be go registration account
//may be use the "href" on html, or use the res.redirect to registration page

module.exports = router




/**
 * To get All data from db.json
 * http://localhost:3000/createPost
 */

/**
 * let fs = require('fs');
 * const dbJSONfile = "./db.json"
 * let dbDate = [];
 * 
 * function reload(dbFile) {
  if (fs.existsSync(dbFile))
    dbDate = JSON.parse(fs.readFileSync(dbFile));
  else dbDate = [];
}
    reload(dbJSONfile);
    res.send(dbDate);

 */