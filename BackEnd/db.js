//const Pool = require("pg").Pool;
const { Pool, Client } = require("pg");
const { readFileSync, existsSync } = require("fs");

let secrets, user, password, database, host, post;

if (!(process.env.PASSWORD)) {
  secrets = require("./secrets.json");
  user = secrets.user;
  password = secrets.password;
  database = secrets.database;
  host = secrets.host;
  post = secrets.post;
} else {
  user = process.env.POSTGRES_USER;
  password = process.env.POSTGRES_PASSWORD;
  database = process.env.POSTGRES_DATABASE;
  host = process.env.POSTGRES_HOST
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
