//const Pool = require("pg").Pool;
const { Pool, Client } = require("pg");
const { readFileSync, existsSync } = require("fs");

let secrets, user, password, database, host, post;
let url, pool;

if (!process.env.DATABASE_URL) {
  secrets = require('./secrets.json');
  url = secrets.url;
  pool = new Client({
    connectionString: url
  });
  } else {
    pool = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
  
// pool = new Client({
//   connectionString: url,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });


pool.connect();

module.exports = pool;
