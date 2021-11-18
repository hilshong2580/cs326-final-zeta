//const Pool = require("pg").Pool;
const { Pool, Client } = require("pg");
const { readFileSync, existsSync } = require("fs");

let secrets, user, password, database, host, post;


   secrets = require("./secrets.json");
   user = secrets.user;
   password = secrets.password;
   database = secrets.database;
   host = secrets.host;
   post = secrets.post;
// } else {


//const secrets = require('./secrets.json');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }||{
  user: user,
  password: password,
  database: database,
  host: host,
  post: post
} );

module.exports = pool;
