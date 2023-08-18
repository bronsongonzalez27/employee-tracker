const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "Oakland9557542!",
  database: "employee_tracker_db"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;