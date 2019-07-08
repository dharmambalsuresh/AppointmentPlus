var mysql = require('mysql');

exports.con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "appointmentplus"
});

