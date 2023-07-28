const inquire = require("inquirer");
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    database: "employee_tracker_db",
    password: "password",
});

// connects to sever, if error throws error, if not console logs connected to employee database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the employee database.");
  });

function getEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
function getRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}

