"use strict";

const express = require("express");
const router = express.Router();
const faker = require("faker");

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

for(let i in postData){
  console.log(postData[i].photo);
}

router.put("/CommentText", function (req, res) {
  console.log("this is Comment Text");
  let username = req.body.username;
  let comment = req.body.comment;
  let title = req.body.title;
  let id = req.body.id;
  let email = req.body.email;

  if (pushComment(username, comment, title, id, email))
    res.status(200).send("true");
  else res.status(400).send("false");
});

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

// DELETE method route to update the post
router.delete("/PostD", function (req, res) {
  console.log("this is delete post");
  let email = req.body.email;
  let id = req.body.id;
  console.log(email + "  " + id);
  if (deleteJsonObj(email, id)) res.status(200).send("true");
  else res.status(404).send("false");
});

function deleteJsonObj(email, id) {
  for (let i in postData) {
    if (postData[i].email === email && postData[i].id === id) {
      postData.splice(i, 1);
      return true;
    }
  }
  return false;
}

// POST method route
router.post("/PostP", function (req, res) {
  console.log("this is create post");
  console.log(req.body); // your JSON
  postData.push(req.body);
  res.status(200).send("User created!");
  //response.send(request.body);    // echo the result back
});

// GET method route to get all post
router.get("/PostG", function (req, res) {
  console.log("this is get all post");
  console.log(postData);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(JSON.stringify(postData));
});

// PUT method route to update the post
router.put("/PostE", function (req, res) {
  console.log("this is update post");
  let body = req.body;

  if (editJsonObj(body))
    res.status(200).send("true");
  else res.status(404).send("false");
});

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
