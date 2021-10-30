"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("this is create post page");
});

// POST method route
router.post("/createPost", function (req, res) {
  console.log("this is create post");
});

module.exports = router;

/**
 * To get All data from db.json
 * http://localhost:3000/createPost
 


let fs = require('fs');

const dbJSONfile = "./db.json"
let dbDate = [];

//road db.json
function reload(dbFile) {
  if (fs.existsSync(dbFile))
    dbDate = JSON.parse(fs.readFileSync(dbFile));
  else dbDate = [];
}

    reload(dbJSONfile);
    res.send(dbDate);
    return dbDate;




 */
