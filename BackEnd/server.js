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
  console.log("this is example for index.html and client.js");
  res.status(200).send(JSON.stringify(faker.helpers.userCard()));
});


//import login router
const userLogin = require("./routes/login");
app.use("/login", userLogin);

//import main router
const mainRouter = require("./routes/main");
app.use("/main", mainRouter);
