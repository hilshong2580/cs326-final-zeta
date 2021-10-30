'use strict';

const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log("this is main")
})

// POST method route
router.post("/createPost", function (req, res) {
    console.log("this is create post");
});

// GET method route to get all post
router.get('/getPost', function (req, res) {
  console.log("this is create post");
});

// PUT method route to update the post
router.put('/updatePost', function (req, res) {
  console.log("this is update post");
});

// DELETE method route to update the post
router.delete('/deletePost', function (req, res) {
  console.log("this is delete post");
});





module.exports = router