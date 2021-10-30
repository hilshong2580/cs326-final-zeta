'use strict';

const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log("this is login")
    req.send()
})

// POST method route
router.post('/testPost', function (req, res) {
    res.status(201).send('POST request to the homepage');
  });


module.exports = router