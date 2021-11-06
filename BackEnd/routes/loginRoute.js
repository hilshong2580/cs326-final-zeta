const express = require("express");
const router = express.Router();
const faker = require("faker");

//default the static beginning page is login.html on frontend folder
router.use(express.static("../FrontEnd", { index: "login.html" }));

//use the fake data to generate json object
let accounts = new Array(3).fill(null).map((account) => {
  let phone0 = faker.phone.phoneNumberFormat().replace("-", "");
  phone0 = phone0.replace("-", "");
  return (account = {
    username: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone: phone0,
    about: faker.commerce.productDescription(),
  });
});

//POST method route to do the login process
//if contain account and match the info return status code 200
//false to return 400
router.post("/Account", function (req, res) {
  console.log("this is login server");
  let email = req.body.email;
  let password = req.body.password;
  if (signInCheck(email, password)) res.status(200).send("true");
  else res.status(400).send("false");
});

//a function to check the account is exist or not 
function signInCheck(email, password) {
  if (
    accounts.find((data) => data.email === email && data.password === password)
  )
    return true;

  return false;
}

//POST method route to do the registration account function
//if email already exist return status code 400
//not exist to return 200 for success
router.post("/Registration", function (req, res) {
  console.log("registration page for new account");
  let jsonObj = req.body;
  console.log(jsonObj);
  if (checkRegist(jsonObj)) {
    accounts.push({
      username: jsonObj.username,
      password: jsonObj.password,
      email: jsonObj.email,
      phone: jsonObj.phone,
      about: jsonObj.about,
    });
    res.status(200).send("true");
  } else res.status(400).send("false");
});

//a function to check the account exist or not
function checkRegist(jsonObj) {
  for (let i in accounts) {
    console.log(accounts[i].email);
  }

  if (accounts.find((data) => data.email === jsonObj.email)) return false;
  return true;
}

//POST method route to get the user information once login in
//it use to display the account information for the user
//return status code 200 for success, else return 400
router.post("/UserInfo", function (req, res) {
  console.log("this is get user info");
  let email = req.body.email;
  let returnJson = null;
  returnJson = getUserInfo(email);
console.log(returnJson);
  if (returnJson !== null) {
    res.status(200).json(JSON.stringify(returnJson));
  } else res.status(400).json(JSON.stringify({check:"false"}));
});

//a function to find and return the object from json array
function getUserInfo(userEmail) {
  for (let i in accounts) {
    if (JSON.stringify(accounts[i].email) === userEmail) return accounts[i];
  }
  return null;
}

module.exports = router;
