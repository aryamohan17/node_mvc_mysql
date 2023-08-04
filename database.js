const mysql = require('mysql2/promise')

// connection to db
const connection_ = mysql.createPool(
    {
        host: process.env.host,
        user: process.env.user,
        database: process.env.database,
        password: process.env.password
    }
);

// connection implementation
connection_.getConnection(function(err, connection) {
    // connected! (unless `err` is set)
  });

module.exports={connection_}