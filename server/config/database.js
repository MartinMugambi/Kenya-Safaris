const mysql = require('mysql');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'safari',
});

module.exports = pool;