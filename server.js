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
const promptMessages = {
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
};
// create prompt function for user actions
function prompt() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          promptMessages.viewDepartments,
          promptMessages.viewEmployees,
          promptMessages.viewRoles,
          promptMessages.addDepartment,
          promptMessages.addEmployee,
          promptMessages.addRole,
          promptMessages.removeDepartment,
          promptMessages.removeEmployee,
          promptMessages.removeRole,
          promptMessages.updateDepartment,
          promptMessages.updateEmployee,
          promptMessages.updateRole,
          promptMessages.exit,
        ],
    }
)}
// logging answers to prompts
     answer.then((answer) => {
          console.log("answer", answer);
          switch (answer.action)  {
            case promptMessages.viewDepartment:
                viewDepartments();
                    break;

            case promptMessages.viewEmployees:
                viewEmployees();
                    break;
                  
            case promptMessages.viewRoles:
                viewRoles();
                    break;
             
            case promptMessages.addDepartment:
                addDepartment();
                    break;
          
            case promptMessages.addEmployee:
                addEmployee();
                    break;
          
            case promptMessages.addRole:
                addRole();
                    break;  
            
            case promptMessages.removeDepartment:
                removeDepartment();
                    break;

            case promptMessages.removeEmployee:
                removeEmployee();
                    break;
                      
            case promptMessages.removeRole:
                removeRole();
                    break;
                    
            
            case promptMessages.updateDepartment:
                updateDepartment();
                    break;  
                      
            case promptMessages.updateEmployee:
                updateEmployee();
                    break;
              
            case promptMessages.updateRole:
                updateRole();
                    break;
              
              
            case promptMessages.exit:
                db.end();
                    break;
                    }
                  });
            
// input add Department 
function addDepartment() {
    const deptData = [
      {
        type: "input",
        name: "Name",
        message: "please enter department name",
        description: "department name info",
      },
    ]}