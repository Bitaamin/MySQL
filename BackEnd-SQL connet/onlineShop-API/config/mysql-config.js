const mysql = require("mysql2");


const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "taamiDB"
})
    .promise();

module.exports = pool;