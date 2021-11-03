const express = require("express");
const router = express.Router();
const faker = require("faker");

router.use(express.static("../FrontEnd", { index: "login.html" }));

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
console.log(accounts);

// POST method route to do the login process
//if contain account and match the info
//redirect to main page
router.post("/Account", function (req, res) {
  console.log("this is login server");
  let email = req.body.email;
  let password = req.body.password;
  if (signInCheck(email, password)) res.status(200).send("true");
  else res.status(400).send("false");
});

function signInCheck(email, password) {
  if (
    accounts.find((data) => data.email === email && data.password === password)
  )
    return true;

  return false;
}

// POST method route
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

function checkRegist(jsonObj) {
  if (accounts.find((data) => data.email === jsonObj.email)) return false;

  return true;
}

module.exports = router;
