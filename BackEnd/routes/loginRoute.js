const express = require('express')
const router = express.Router()

const faker = require("faker");


router.use(express.static('../FrontEnd', {index: 'login.html'}));

let accounts = new Array(3).fill(null).map((account) => {
  return (account = {
    // email: faker.internet.email(),
    // username : faker.internet.username(),
    // password: faker.internet.password(),
    // phone : faker.datatype.number(),
    // aboutme : faker.lorem.words(),
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
    if(accounts.find(data => data.email === email && data.password === password)){
      return true;
    }
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
      "username": req.body.username,
      "password": req.body.password,
      "phone": req.body.phone,
      "aboutme": req.body.aboutme
    })
    res.send("true");
  }
  else
    res.send("false");

});

router.get("/login", function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.json(JSON.stringify(accounts));
});


function checkRegist(email) {
  //if accounts not exist email
  //return true
if(accounts.find(data => data.email === email )){
      return false;
    }
    return true;
}


module.exports = router
