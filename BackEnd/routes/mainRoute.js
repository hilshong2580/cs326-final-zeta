"use strict";

const express = require("express");
const router = express.Router();
const faker = require("faker");
const cors = require("cors");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cors());
// router.use(express.static('../FrontEnd'));
router.use(express.static('../FrontEnd', {index: 'main.html'}));


let postData = new Array(3).fill(null).map((post) => {
  return (post = {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    title: faker.name.title(),
    destination: faker.address.streetAddress(),
    outset: faker.address.streetAddress(),
    dateTimeStart: faker.datatype.datetime(),
    dateTimeEnd: faker.datatype.datetime(),
    numOfPeople: faker.datatype.number(),
    description: faker.lorem.words(),
    photo: faker.image.avatar(),
    comment:[
      {name:faker.name.findName(), comment: faker.hacker.phrase()},
      {name:faker.name.findName(), comment: faker.hacker.phrase()},
      {name:faker.name.findName(), comment: faker.hacker.phrase()},
      {name:faker.name.findName(), comment: faker.hacker.phrase()},
      {name:faker.name.findName(), comment: faker.hacker.phrase()},
      {name:faker.name.findName(), comment: faker.hacker.phrase()},
      {name:faker.name.findName(), comment: faker.hacker.phrase()},
      {name:faker.name.findName(), comment: faker.hacker.phrase()},
      {name:faker.name.findName(), comment: faker.hacker.phrase()}
    ]
  });
});


router.get("/", (req, res) => {
  console.log("this is main");
});

// DELETE method route to update the post
router.delete("/deletePost", function (req, res) {
  console.log("this is delete post");
  let email = req.body.email;
  let uuid = req.body.id;

});

function deleteJsonObj(email, id){
  for(let post in postData){
    if(postData[post].email.equals(email) && postData[post].id.equals(id)){
      postData.splice(post, 1);
      return true;
    }

  }
}




// POST method route
router.post("/createPost", function (req, res) {
  console.log("this is create post");
  console.log(req.body);      // your JSON
  postData.push(req.body); 
  res.status(200).send('User created!');
  //response.send(request.body);    // echo the result back
});


// GET method route to get all post
router.get("/getPost", function (req, res) {
  console.log("this is get all post");
  res.setHeader('Content-Type', 'application/json');
  res.json(JSON.stringify(postData));
});

// PUT method route to update the post
router.put("/updatePost", function (req, res) {
  console.log("this is update post");
});


module.exports = router;
