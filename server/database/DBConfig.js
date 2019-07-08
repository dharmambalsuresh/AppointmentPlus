var mysql = require('mysql');

exports.con = mysql.createPool({
  host: "appointmentplus.mysql.database.azure.com",
  user: "akhil@appointmentplus",
  password: "Appointmentplus12",
  database: "appointmentplus"
});

