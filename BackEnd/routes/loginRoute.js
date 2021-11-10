const express = require("express");
const router = express.Router();
const pool = require("../db");

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
    const {password, name, email, phone, about} = req.body;
    const createAccount = await pool.query(
        "INSERT INTO userTable (password, name, email, phone, about) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [password, name, email, phone, about]);
        res.status(200).send("New Account Create Successful");
  } catch (err) {
    console.log(err.message);
    res.status(400).send("existed");
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
    const {password, email} = req.body;
    const loginAccount = await pool.query(   
        "SELECT * FROM userTable WHERE email = $1 AND password=$2",
        [email, password]);

        if(loginAccount.rows.length >0)
          res.status(200).json(loginAccount.rows[0]);
        else
          res.status(400).send("Login fail, not match");
  } catch (err) {
    console.log(err.message);
    res.status(404).send("Login fail");
  }
});

// //a function to check the account is exist or not 
// function signInCheck(email, password) {
//   if (
//     accounts.find((data) => data.email === email && data.password === password)
//   )
//     return true;

//   return false;
// }



// //POST method route to get the user information once login in
// //it use to display the account information for the user
// //return status code 200 for success, else return 400
// router.post("/UserInfo", function (req, res) {
//   console.log("this is get user info");
//   let email = req.body.email;
//   let returnJson = null;
//   returnJson = getUserInfo(email);
// console.log(returnJson);
//   if (returnJson !== null) {
//     res.status(200).json(JSON.stringify(returnJson));
//   } else res.status(400).json(JSON.stringify({check:"false"}));
// });


// //a function to find and return the object from json array
// function getUserInfo(userEmail) {
//   for (let i in accounts) {
//     if (JSON.stringify(accounts[i].email) === userEmail) return accounts[i];
//   }
//   return null;
// }

// //a function to check the account exist or not
// function checkRegist(jsonObj) {
//   for (let i in accounts) {
//     console.log(accounts[i].email);
//   }

//   if (accounts.find((data) => data.email === jsonObj.email)) return false;
//   return true;
// }

module.exports = router;
