"use strict";
console.log("Server-side code running");

const express = require("express");
const app = express();
const cors = require("cors");
const faker = require("faker");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(process.env.PORT || port);

app.get("/", (req, res) => {
  console.log("this is server.js");
});

//let user = faker.helpers.userCard();
app.get("/users", (req, res) => {
  console.log("this is server.js");
  //return faker.helpers.userCard();
  res.status(200).send(JSON.stringify(faker.helpers.userCard()));
});


//import createPost router
const createPostRouter = require("./routes/createPost");
app.use("/createPost", createPostRouter);

//import login router
const userLogin = require("./routes/login");
app.use("/login", userLogin);

//import main router
const mainRouter = require("./routes/main");
app.use("/main", mainRouter);
