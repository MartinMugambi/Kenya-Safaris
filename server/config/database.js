const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'safari',
});

module.exports = pool;