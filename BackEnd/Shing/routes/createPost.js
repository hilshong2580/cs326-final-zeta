'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');

const express = require('express')
const router = express.Router()

const dbJSONfile = "./db.json"
let dbDate = [];

//road db.json
function reload(dbFile) {
  if (fs.existsSync(dbFile))
    dbDate = JSON.parse(fs.readFileSync(dbFile));
  else dbDate = [];
}

router.get('/', (req, res)=>{
    console.log("get db file router")
    reload(dbJSONfile);
    res.send(dbDate);
    return dbDate;
})

// POST method route
router.post('/testPost', function (req, res) {
    res.status(201).send('POST request to the homepage');
  });


module.exports = router

/**
 * To get All data from db.json
 * http://localhost:3000/createPost
 */