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

    //Obtain user table
    const userInfo = await pool.query(
      "SELECT * FROM userTable WHERE userid = $1",
      [userId]
    );

    if (userInfo.rows.length > 0)
      res.status(200).json(JSON.stringify(userInfo.rows[0]));
    else res.status(202).send(("Find user info fail, not match"));
  } catch (err) { //throw error if cannot find user
    console.log(err.message);
    res.status(404).send(("Find user info error"));
  }

});

////////////////////////////POST create, edit, delete, get ///////////////////////

router.post("/UserFav", async function (req, res) {
  try {
    const { userId } = req.body;

    const userInfo = await pool.query(
      "SELECT * FROM favTable WHERE userid = $1",
      [userId]
    );

    if (userInfo.rows.length > 0)
      res.status(200).json(JSON.stringify(userInfo.rows));
    else res.status(202).json(JSON.stringify("Find user info fail, not match"));
  } catch (err) {
    console.log(err.message);
    res.status(404).json(JSON.stringify("Find user info error"));
  }
});

// GET method route to get all post
router.get("/", async function (req, res) {
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

    if (updatePost.rowCount > 0) res.status(200).send("Post Update Success");
    else res.status(202).send("Post Update Fail");
  } catch (err) {
    console.log(err.message);
    res.status(404).send("Post Update Error");
  }

});

// DELETE method route for the post owner to delete the post
router.delete("/", async function (req, res) {

  try {
    const { userId, postId } = req.body;
    const deletePost = await pool.query(
      "DELETE FROM posttable WHERE userid = $1 AND postid = $2",
      [userId, postId]
    );

    if (deletePost.rowCount > 0) res.status(200).send("Post Delete Success");
    else res.status(202).send("Post Delete Fail");
  } catch (err) {
    console.log(err.message);
    res.status(404).send("Post Delete Error");
  }
});

////////////////////////////User Comment///////////////////////
//a put method to update the comment from post
//push the comment into correct postion comment column
router.post("/comment", async function (req, res) {

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

  try {
    const { postId } = req.body;

    const getComment = await pool.query(
      "SELECT * FROM commentTable WHERE postid = $1",
      [postId]
    );

    if (getComment.rows.length > 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(JSON.stringify(getComment.rows));
    } else res.status(202).send(("get comment fail"));
  } catch (err) {
    console.log(err.message);
    res.status(404).send(("get comment error"));
  }
});

// DELETE method route for the post owner to delete the post
router.delete("/comment", async function (req, res) {

  try {
    const { postId } = req.body;
    const deleteComment = await pool.query(
      "DELETE FROM commentTable WHERE postid = $1",
      [postId]
    );

    console.log(deleteComment.rowCount);
    if (deleteComment.rowCount > 0)
      res.status(200).send(("comment Delete Success"));
    else res.status(202).send(("comment Delete Fail"));
  } catch (err) {
    console.log(err.message);
    res.status(404).send(("comment Delete Error"));
  }
});

////////////////////////////edit user info///////////////////////
router.put("/editUser", async function (req, res) {

  try {
    const { userid, name, email, phone, about } = req.body;
    const updateUser = await pool.query(
      "UPDATE userTable SET name = $2, email = $3, phone= $4, about= $5 WHERE userid = $1",
      [userid, name, email, phone, about]

    );

    if (updateUser.rowCount > 0) res.status(200).send("Post Update Success");
    else res.status(202).send("Post Update Fail");
  } catch (err) {
    console.log(err.message);
    res.status(404).send("Post Update Error");
  }

});

////////////////////////////user activity///////////////////////
router.put("/activity", async function (req, res) {

  try {
    const { userId, favorite, post, comment } = req.body;
    const activityUpdate = await pool.query(
      "UPDATE activityTable set favorite_num = favorite_num + $1, post_num = post_num + $2, comment_num = comment_num + $3 WHERE userid = $4",
      [favorite, post, comment, userId]

    );
    if (activityUpdate.rowCount > 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(JSON.stringify(activityUpdate.rows));
    } else res.status(202).send(("activity update fail"));
  } catch (err) {
    console.log(err.message);
    res.status(404).send(("activity update error"));
  }
});

router.post("/activity", async function (req, res) {

  try {
    const userId = req.body.userId;
    const getActivity = await pool.query("SELECT * FROM activityTable Inner JOIN userTable On userTable.userid = activityTable.userid Where activityTable.userid = $1", [userId]);
    if (getActivity.rows.length > 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(JSON.stringify(getActivity.rows));
    } else res.status(202).send("get all Activity fail");
  } catch (err) {
    console.log(err.message);
    res.status(404).send("get all Activity error");
  }
});

////////////////////////add to fav//////////////////////////
router.post("/Fav", async function (req, res) {

  try {
    const { userid, postid, postTag } = req.body;
    const addfav = await pool.query(
      "INSERT INTO favTable (userid, postid, postTag) VALUES ($1, $2, $3) RETURNING *",
      [userid, postid, postTag]
    );

    res.status(200).send("Add fav to table Successful");
  } catch (err) {
    console.log(err.message);
    res.status(202).send("Add fav to table Fail");
  }
});

///////////////////////////////remove from fav/////////////////////////////
router.delete("/Fav", async function (req, res) {

  try {
    const { userid, postid } = req.body;
    const delfav = await pool.query(
      "DELETE FROM favTable WHERE userid=$1 AND postid = $2",
      [userid, postid]
    );
    res.status(200).send("Del fav to table Successful");
  } catch (err) {
    console.log(err.message);
    res.status(202).send("del fav to table Fail");
  }
});

/////////////////////////check if fav////////////////////
router.put("/Fav", async function (req, res) {

  try {
    const { userid, postid } = req.body;
    const ckeckfav = await pool.query(
      "SELECT * FROM favTable WHERE userid=$1 AND postid = $2",
      [userid, postid]
    );

    if (ckeckfav.rowCount > 0) {
      res.status(200).send("true");
    }
    else {
      res.status(200).send("false");
    }
  } catch (err) {
    console.log(err.message);
    res.status(202).send("check fav to table Fail");
  }
});



module.exports = router;
