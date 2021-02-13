const mysql = require("mysql")
const inquirer = require("inquirer");
const {response}= require("express");
require("console.table");
// requiring mySql, inquirer and express packages and console.table to 
// test in Terminal 


const db = mysql.createConnection({
    host: "localhost",
    port: 3306
    user: "root",
    password: "MajiNo.1!",
    database: "employee_tracker",
})