"use strict";

const express = require("express");
const router = express.Router();
const faker = require("faker");

//use the fake data to generate json object
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
    comment: [
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
    ],
  });
});

//a put method to update the comment from post
//push the comment into correct postion comment column 
router.put("/MainComment", function (req, res) {
  console.log("this is Comment Text");
  console.log(req.body);
  let username = req.body.username;
  let comment = req.body.comment;
  let title = req.body.title;
  let id = req.body.id;
  let email = req.body.email;

  if (pushComment(username, comment, title, id, email))
    res.status(200).send("true");
  else res.status(400).send("false");
});

//a function to find and push the comment to column, used in /MainComment
function pushComment(username, comment, title, id, email) {
  for (let i in postData) {
    if (
      postData[i].email === email &&
      postData[i].id === id &&
      postData[i].title === title
    ) {
      postData[i].comment.push({ name: username, comment: comment });
      return true;
    }
  }
  return false;
}

// DELETE method route for the post owner to delete the post 
router.delete("/MainD", function (req, res) {
  console.log("this is delete post");
  let email = req.body.email;
  let id = req.body.id;
  console.log(email + "  " + id);
  if (deleteJsonObj(email, id)) res.status(200).send("true");
  else res.status(404).send("false");
});

//a function to find a specific post, delete it
function deleteJsonObj(email, id) {
  for (let i in postData) {
    if (postData[i].email === email && postData[i].id === id) {
      postData.splice(i, 1);
      return true;
    }
  }
  return false;
}

// a POST method for user to create a new account
//it push the input data to json array
router.post("/MainP", function (req, res) {
  console.log("this is create post");
  console.log(req.body); // your JSON
  postData.push(req.body);
  res.status(200).send("User created!");
});

// GET method route to get all post
router.get("/MainG", function (req, res) {
  console.log("this is get all post");
  console.log(postData);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(JSON.stringify(postData));
});

// PUT method route to update the post
// post owner can edit the post information
router.put("/MainE", function (req, res) {
  console.log("this is update post");
  let body = req.body;

  if (editJsonObj(body))
    res.status(200).send("true");
  else res.status(404).send("false");
});

//a function to find and update the post detail
function editJsonObj(body) {
  for (let i in postData) {
    if (postData[i].email === body.email && postData[i].id === body.id) {
      postData[i].title = body.title;
      postData[i].destination =  body.destination;
      postData[i].outset =  body.outset;
      postData[i].numOfPeople =  body.numOfPeople;
      postData[i].description =  body.description;
      return true;
    }
  }
  return false;
}
module.exports = router;
