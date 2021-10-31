"use strict";

const express = require("express");
const router = express.Router();
const faker = require("faker");
const cors = require("cors");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cors());


let products = new Array(3).fill(null).map((product) => {
  return (product = {
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
      { nameA: faker.hacker.phrase()},
      { nameB: faker.hacker.phrase()},
      { nameC: faker.hacker.phrase()}
    ]
  });
});


router.get("/", (req, res) => {
  console.log("this is main");
});

// POST method route
router.post("/createPost", function (req, res) {
  console.log("this is create post");
  console.log(req.body);      // your JSON
  products.push(req.body); 
  res.status(200).send('User created!');
  //response.send(request.body);    // echo the result back
});

// GET method route to get all post
router.get("/getPost", function (req, res) {
  console.log("this is get all post");
  res.status(200).send(JSON.stringify(products));
});

// PUT method route to update the post
router.put("/updatePost", function (req, res) {
  console.log("this is update post");
});

// DELETE method route to update the post
router.delete("/deletePost", function (req, res) {
  console.log("this is delete post");
});

module.exports = router;
