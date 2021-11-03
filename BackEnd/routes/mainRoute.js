"use strict";

const express = require("express");
const router = express.Router();
const faker = require("faker");

// router.use(express.static('../FrontEnd'));
router.use(express.static("../FrontEnd", { index: "main.html" }));

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
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
      { name: faker.name.findName(), comment: faker.hacker.phrase() },
    ],
  });
});

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
    console.log(postData[i].email);
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
  let id = req.body.id;
  let email = req.body.email;
  let title = req.body.title;



  if (editJsonObj(id, email, title))
    res.status(200).send("true");
  else res.status(404).send("false");
});

function editJsonObj(id, email, title) {
  for (let i in postData) {
    if (postData[i].email === email && postData[i].id === id) {
      postData[i].title = title;
      return true;
    }
  }
  return false;
}

module.exports = router;
