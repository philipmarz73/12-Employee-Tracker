const mysql = require("mysql")
const inquirer = require("inquirer");
const {response}= require("express");
require("console.table");
// requiring mySql, inquirer and express packages and console.table to 
// test in Terminal 

// define db, make localhost connection
const db = mysql.createConnection({
    host: "localhost",
    port: 3306
    user: "root",
    password: "MajiNo.1!",
    database: "employee_tracker",
})
// add error prompt
db.connect((err) => {
    if (err) throw err;
    console.log("connected");
    prompt();
});
// set promptMessage variable
const promptMessage = {
    viewDepartment: "View All Departments",
    viewEmployees: "View All Employees",
    viewRoles: "View All Roles",
    addDepartment: "Add Department",
    addEmployee: "Add An Employee",
    addRole: "Add Role",
    removeDepartment: "Remove Department",
    removeEmployee: "Remove An Employee",
    removeRole: "Remove Role",
    updateDepartment: "Update Department",
    updateEmployee: "Update Employee",
    updateRole: "Update Role",
    exit: "Exit",
}