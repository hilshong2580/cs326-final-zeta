"use strict";

const express = require("express");
const router = express.Router();
const pool = require("../db");

//POST method route to get the user information once login in
//it use to display the account information for the user
//return status code 200 for success, else return 400
router.post("/UserInfo", async function (req, res) {
  console.log("this is get user info from main in back end");

  try {
    const { userId } = req.body;
    console.log(userId);

    const userInfo = await pool.query(
      "SELECT * FROM userTable WHERE userid = $1",
      [userId]
    );

    if (userInfo.rows.length > 0)
      res.status(200).json(JSON.stringify(userInfo.rows[0]));
    else res.status(202).json(JSON.stringify("Find user info fail, not match"));
  } catch (err) {
    console.log(err.message);
    res.status(404).json(JSON.stringify("Find user info error"));
  }

});

// GET method route to get all post
router.get("/", async function (req, res) {
  console.log("this is get all post in backend main");
  try {
    const getPost = await pool.query("SELECT * FROM postTable");

    if (getPost.rows.length > 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(JSON.stringify(getPost.rows));
    } else res.status(202).send("get all post fail");
  } catch (err) {
    console.log(err.message);
    res.status(404).send("get all error");
  }
});

// a POST method for user to create a new account
//it push the input data to json array
router.post("/", async function (req, res) {
  console.log("this is create post in backend main");

  try {
    console.log(req.body);
    const {
      userId,
      title,
      destination,
      outset,
      dateTimeStart,
      dateTimeEnd,
      numOfPeople,
      description,
      photo,
    } = req.body;
    const createPost = await pool.query(
      "INSERT INTO posttable (userid, title, destination, outset, datetimestart, datetimeend, numofpeople, description, photo) VALUES ($1, $2, $3, $4, $5, $6, $7,$8, $9 ) RETURNING *",
      [
        userId,
        title,
        destination,
        outset,
        dateTimeStart,
        dateTimeEnd,
        numOfPeople,
        description,
        photo,
      ]
    );
    res.status(200).send("New Post Create Successful");
  } catch (err) {
    console.log(err.message);
    res.status(202).send("New Post Create Fail");
  }
});

// PUT method route to update the post
// post owner can edit the post information
router.put("/", async function (req, res) {
  console.log("this is update/edit post");
  try {
    const {
      title,
      destination,
      outset,
      numOfPeople,
      description,
      userId,
      postId,
    } = req.body;
    const updatePost = await pool.query(
      "UPDATE postTable SET title = $1, destination = $2, outset= $3, numOfPeople= $4, description= $5 WHERE userid = $6 AND postid = $7",
      [title, destination, outset, numOfPeople, description, userId, postId]
    );

    console.log(updatePost);
    if (updatePost.rowCount > 0) res.status(200).json("Post Update Success");
    else res.status(202).json("Post Update Fail");
  } catch (err) {
    console.log(err.message);
    res.status(404).json("Post Update Error");
  }

});

// DELETE method route for the post owner to delete the post
router.delete("/", async function (req, res) {
  console.log("this is delete post");

  try {
    const { userId, postId } = req.body;
    const deletePost = await pool.query(
      "DELETE FROM posttable WHERE userid = $1 AND postid = $2",
      [userId, postId]
    );

    console.log(deletePost.rowCount);
    if (deletePost.rowCount > 0) res.status(200).json("Post Delete Success");
    else res.status(202).json("Post Delete Fail");
  } catch (err) {
    console.log(err.message);
    res.status(404).json("Post Delete Error");
  }
});

//a put method to update the comment from post
//push the comment into correct postion comment column
router.post("/comment", async function (req, res) {
  console.log("this is Comment Text");

  try {
    console.log(req.body);
    const { postId, name, comment } = req.body;
    const createPost = await pool.query(
      "INSERT INTO commentTable (postid, name, comment) VALUES ($1, $2, $3) RETURNING *",
      [postId, name, comment]
    );
    res.status(200).send("Add comment to table Successful");
  } catch (err) {
    console.log(err.message);
    res.status(202).send("Add comment to table Fail");
  }

});

// PUT method route to get all post
router.put("/comment", async function (req, res) {
  console.log("this is get comment in backend main");
  try {
    const { postId } = req.body;
    console.log(postId);

    const getComment = await pool.query(
      "SELECT * FROM commentTable WHERE postid = $1",
      [postId]
    );

    console.log(getComment.rows);
    if (getComment.rows.length > 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(JSON.stringify(getComment.rows));
    } else res.status(202).json(JSON.stringify("get comment fail"));
  } catch (err) {
    console.log(err.message);
    res.status(404).json(JSON.stringify("get comment error"));
  }
});

// DELETE method route for the post owner to delete the post
router.delete("/comment", async function (req, res) {
  console.log("this is delete comment");

  try {
    const { postId } = req.body;
    const deleteComment = await pool.query(
      "DELETE FROM commentTable WHERE postid = $1",
      [postId]
    );

    console.log(deleteComment.rowCount);
    if (deleteComment.rowCount > 0)
      res.status(200).json(JSON.stringify("comment Delete Success"));
    else res.status(202).json(JSON.stringify("comment Delete Fail"));
  } catch (err) {
    console.log(err.message);
    res.status(404).json(JSON.stringify("comment Delete Error"));
  }
});

////////////////////////////edit user info///////////////////////
router.put("/editUser", async function (req, res) {
  console.log("this is update/edit User");
  try {
    const {userid, name, email, phone, about } = req.body;
    const updateUser = await pool.query(
      "UPDATE userTable SET name = $2, email = $3, phone= $4, about= $5 WHERE userid = $1",
      [userid, name, email, phone, about]
 
    );

    console.log(JSON.stringify(req.body));
    if (updateUser.rowCount > 0) res.status(200).json("Post Update Success");
    else res.status(202).json("Post Update Fail");
  } catch (err) {
    console.log(err.message);
    res.status(404).json("Post Update Error");
  }

});

////////////////////////add to fav//////////////////////////
router.post("/addToFav", async function (req, res) {
  console.log("this is adding to fav");

  try {
    console.log(req.body);
    const { userid, postid  } = req.body;
    const addfav = await pool.query(
      "INSERT INTO favTable (userid, postid) VALUES ($1, $2) RETURNING *",
      [userid,postid]
    );
    //console.log(req.body);
    res.status(200).send("Add fav to table Successful");
  } catch (err) {
    console.log(err.message);
    res.status(202).send("Add fav to table Fail");
  }

});

/////////////////////////check if fav////////////////////
router.post("/checkIfFav", async function (req, res) {
  console.log("this is checking to fav");

  try {
    console.log(req.body);
    const { userid, postid  } = req.body;
    const ckeckfav = await pool.query(
      "SELECT * FROM favTable WHERE userid=$1 AND postid = $2",
      [userid,postid]
    );

    if (ckeckfav.rowCount>0){
    //console.log(req.body);
    res.status(200).send("true");}
    else{
    res.status(200).send("false");
    }
  } catch (err) {
    console.log(err.message);
    res.status(202).send("check fav to table Fail");
  }
});

///////////////////////////////remove from fav/////////////////////////////
router.post("/delFav", async function (req, res) {
  console.log("this is del to fav");

  try {
    console.log(req.body);
    const { userid, postid  } = req.body;
    const delfav = await pool.query(
      "DELETE FROM favTable WHERE userid=$1 AND postid = $2",
      [userid,postid]
    );
   // console.log(req.body);
  } catch (err) {
    console.log(err.message);
    res.status(202).send("del fav to table Fail");
  }
});


module.exports = router;
