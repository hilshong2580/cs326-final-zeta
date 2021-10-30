'use strict';

const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log("this is main")
})


module.exports = router