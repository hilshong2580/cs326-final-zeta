//const Pool = require("pg").Pool;
const { Pool, Client } = require("pg");
const { readFileSync, existsSync } = require("fs");

let secrets, user, password, database, host, post;

const pool = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

module.exports = pool;
