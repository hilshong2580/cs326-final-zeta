const express = require("express");
const router = express.Router();
const pool = require("../db");
require('dotenv').config();

const express = require('express');                 // express routing
const minicrypt = require('../miniCrypt');

const mc = new minicrypt();

//default the static beginning page is login.html on frontend folder
router.use(express.static("../FrontEnd", { index: "login.html" }));

//POST method route to do the registration account function
//if email already exist return status code 400
//not exist to return 200 for success
router.post("/Registration", async function (req, res) {
  console.log("this is create account");
  try {
    let jsonObj = req.body;
    console.log(req.body);
    const { password, name, email, phone, about } = req.body;
    const [salt, hash] = mc.hash(password);
    const createAccount = await pool.query(
      "INSERT INTO userTable (salt, hash, name, email, phone, about) VALUES ($1, $2, $3, $4, $5, y$6) RETURNING *",
      [salt, hash, name, email, phone, about]
    );
    console.log(createAccount.rows);
      if(createAccount.rows.length > 0){
        const createActivity = await pool.query(
          "INSERT INTO activityTable (userId, favorite_Num, post_Num, comment_Num) VALUES ($1, $2, $3, $4) RETURNING *",
          [createAccount.rows[0].userid, 0, 0, 0]
        );
        console.log(createActivity.rows);
      }

    res.status(200).send("New Account Create Successful");
  } catch (err) {
    console.log(err.message);
    res.status(405).send("existed");
  }
});

//POST method route to do the login process
//if contain account and match the info return status code 200
//login fail to return 400
//connect database fail return 404
router.post("/Account", async function (req, res) {
  console.log("this is login server");
  try {
    //console.log(req.body);
    const { password, email } = req.body;
    const loginAccount = await pool.query(
      "SELECT * FROM userTable WHERE email = $1",
      [email]
    );
    //console.log(loginAccount.rows);

    if (loginAccount.rows.length > 0 && mc.check(password, loginAccount.rows[1], loginAccount.rows[2])){
      console.log("Login successful");
      console.log(loginAccount.rows);
      res.status(200).json(JSON.stringify(loginAccount.rows[0]));
    }
      
    else res.status(400).json("Login fail, not match");
  } catch (err) {
    console.log(err.message);
    res.status(404).json("Login fail");
  }
});


module.exports = router;
