"use strict";
console.log("Server-side code running");

const express = require("express");
const app = express();
const cors = require("cors");
const faker = require("faker");
const pool = require("./db");
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));
app.use(express.static('./FrontEnd', { index: 'login.html' }));

//listen to heroku database or local database
app.listen(process.env.PORT || port);
//app.listen(process.env.PORT);


// create user table, Post table, activity table, favtable and comment table if not exist
createUserTable();
createPostTable();
createCommentTable();
createActivityTable();
createFavTable();

//import login router
const userLogin = require("./routes/loginRoute");
app.use("/login", userLogin);

//import main router
const mainRouter = require("./routes/mainRoute");
app.use("/main", mainRouter);


//create user account table
async function createUserTable() {
    const userTable = await pool.query(`CREATE TABLE IF NOT EXISTS userTable(
            userId serial PRIMARY KEY,
            password varchar(255) NOT NULL,
            name varchar(255),
            email varchar(255) NOT NULL UNIQUE,
            phone varchar(255),
            about varchar(255)
        )`); //create table columns: uaserId, password, name, email, phone, about
    console.log("userTable created");

}

//create user's Post table
async function createPostTable() {
    const postTable = await pool.query(`CREATE TABLE IF NOT EXISTS postTable(
            postId serial PRIMARY KEY,
            userId INT NOT NULL,
            title varchar(255),
            destination varchar(255),
            outset varchar(255),
            dateTimeStart varchar(255),
            dateTimeEnd varchar(255),
            numOfPeople INT,
            description varchar(255),
            photo varchar(255)
        )`); //create table columns: postId, userId, title, destination, datetimestart/end, numOfPeople, description, photo
    console.log("postTable created");
}


//create user's Post table
async function createCommentTable() {
    const commentTable = await pool.query(`CREATE TABLE IF NOT EXISTS commentTable(
    postId INT NOT NULL,
    name varchar(255) NOT NULL,
    comment varchar(255) NOT NULL
)`);     //create table columns:postId, name, comment
    console.log("commentTable created");
}

//create user's Post table
async function createActivityTable() {
    const commentTable = await pool.query(`CREATE TABLE IF NOT EXISTS activityTable(
    userId INT PRIMARY KEY,
    favorite_Num INT NOT NULL,
    post_Num INT NOT NULL,
    comment_Num INT NOT NULL
)`); 
    console.log("activityTable created");
}

async function createFavTable() {
    const favTable = await pool.query(`CREATE TABLE IF NOT EXISTS favTable(
    userId INT NOT NULL,
    postId INT NOT NULL,
    postTag varchar(255) NOT NULL
)`);
    console.log("favTable created");

}
