//const Pool = require("pg").Pool;
const { Pool, Client } = require("pg");
const { readFileSync, existsSync } = require("fs");

let secrets, user, password, database, host, post;

if (!process.env.PASSWORD) {
  //secrets = require("./secretsHeroku.json");
  // user = secrets.user;
  // password = secrets.password;
  // database = secrets.database;
  // host = secrets.host;
  // post = secrets.post;
  user = "kicycnmrgfuhzd";
  password = "61d7eebb29477caa1646cd54e2996437e16fe6df0825e5ef586b231efba882cb";
  database = "dfvhtoj672lugq";
  host = "ec2-107-23-213-65.compute-1.amazonaws.com";
  post = "5432";

} else {
  user = process.env.NAME;
  password = process.env.PASSWORD;
  database = process.env.DATABASE;
  host = process.env.HOST;
  post = process.env.POST;
}

//const secrets = require('./secrets.json');

const pool = new Pool({
  user: user,
  password: password,
  database: database,
  host: host,
  post: post
});

module.exports = pool;
