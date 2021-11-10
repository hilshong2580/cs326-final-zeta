const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "aa1234",
    database:"ucardb",
    host:"localhost",
    post:"5432"
});

module.exports=pool;