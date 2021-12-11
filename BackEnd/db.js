const { Client } = require("pg");

let secrets;
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

pool.connect();

module.exports = pool;
