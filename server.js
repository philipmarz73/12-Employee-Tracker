const mysql = require("mysql")
const inquirer = require("inquirer");
const {response}= require("express");
require("console.table");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MajiNo.1!",
    database: "employee_tracker",
})