"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("this is registration page");
  req.send();
});

// POST method route
router.post("/testPost", function (req, res) {
  console.log("registration page for new account");
});

module.exports = router;
