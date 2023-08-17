
const { prompt } = require("inquirer");
const connection = require("./connection");
// const connection = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     port: 3306,
//     database: "employee_tracker_db",
//     password: "Oakland9557542!",
// });

// function to view database and decide what you want to do when starting app
function start() {
    
        prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees",
             "View All Roles", 
             "View All Departments", 
             "Add Employee", 
             "Add Role",
              "Add Department", 
              "Update Employee Role", 
              "Exit"],
        })
    
    // switch case to decide what to do based on user input
    .then((answer) => {
        switch (answer.action) {
            case "View All Employees":
                getEmployees();
                break;
            case "View All Roles":
                getRoles();
                break;
            case "View All Departments":
                getDepartments();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Exit":
                connection.end();
                break;
        
            }
    });
}
// connects to sever, if error throws error, if not console logs connected to employee database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the employee database.");
  });
// this is used to find employess that are stored in the database
function getEmployees() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
function getRoles() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
function getDepartments() {
    connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
function addEmployee() {
    prompt([
        {
            name: "first_name",
            type: "input",
            message: "Enter the employee's first name:",
        },
        {
            name: "last_name",
            type: "input",
            message: "Enter the employee's last name:",
        },
        {
            name: "role_id",
            type: "input",
            message: "Enter the role ID for the employee:",
        },
       
    ])
    .then((answers) => {
        connection.query(
            "INSERT INTO employees SET ?",
            {
                first_name: answers.first_name,
                last_name: answers.last_name,
                role_id: answers.role_id,
                
            },
            function (err, res) {
                if (err) throw err;
                console.log("Employee added successfully!");
                start();
            }
        );
    });
}
function addRole() {
    prompt([
        {
            name: "title",
            type: "input",
            message: "Enter the title of the role:",
        },
        {
            name: "salary",
            type: "input",
            message: "Enter the salary for the role:",
        },
        {
            name: "department_id",
            type: "input",
            message: "Enter the department ID for the role:",
        },
    ])
    .then((answers) => {
        connection.query(
            "INSERT INTO roles SET ?",
            {
                first_name: answers.first_name,
                last_name: answers.last_name,
                role_id: answers.role_id,
                
            },
            function (err, res) {
                if (err) throw err;
                console.log("Employee added successfully!");
                start();
            }
        );
    });
}


function addDepartment() {
    prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the name of the department:",
        },
    ])
}
// .then((answers) => {
//     "insert into departments set ?",
//     {
        
    // }
function updateEmployeeRole() {
    prompt([
        {
            name: "id",
            type: "input",
            message: "Enter the ID of the employee you would like to update:",
        },
        {
            name: "role_id",
            type: "input",
            message: "Enter the new role ID for the employee:",
        },
    ])
}

start();