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
            
// get input to add Department 
function addDepartment() {
    const deptData = [
      {
        type: "input",
        name: "Name",
        message: "please enter department name",
        description: "department name",
      },
    ]};
// inserting response into Department table
    inquirer.prompt(deptData).then((response) => {
        console.log(response);
    
        db.query(
          "INSERT INTO department SET ?",
          {
            NAME: response.Name,
          },
          (err, res) => {
            if (err) throw err;
            console.log("record inserted into Department Table");
            prompt();
          }
        );
      });
    
// get employee input
function addEmployee() {
    const employeeResponse = [
      {
        type: "input",
        name: "firstName",
        message: "please enter first  name",
        description: "first name",
      },
  
      {
        type: "input",
        name: "lastName",
        message: "please enter last  name",
        description: "last name",
      },
  
      {
        type: "input",
        name: "roleID",
        message: "please enter role ID",
        description: "role ID",
      },
  
      {
        type: "input",
        name: "mgrID",
        message: "please enter manager id",
        description: "mgr id",
      },
    ]}
    // add responses to employee table
    inquirer.prompt(employeeResponse).then((response) => {
        console.log(response);
    
        db.query(
          "INSERT INTO employee SET ?",
          {
            firstName: response.firstName,
            lastName: response.lastName,
            roleID: response.roleID,
            managerID: response.mgrID,
          },
          (err, res) => {
            if (err) throw err;
            console.log("record inserted into employee table");
            console.log("");
            console.log("");
            prompt();
          }
        );
      });
    // get Role responses
    function addRole() {
        const roleResponse = [
          {
            type: "input",
            name: "titleInfo",
            message: "please enter job title",
            description: "title info",
          },
      
          {
            type: "input",
            name: "salary",
            message: " Please enter salary",
            description: "salary",
          },
      
          {
            type: "input",
            name: "department",
            message: "Please enter department",
            description: "department",
          },
        ]}; 
// add responses to Role table 
        inquirer.prompt(roleResponse).then((response) => {
            db.query(
              "INSERT INTO role SET ?",
              {
                TITLE: response.titleInfo,
                SALARY: response.salary,
                DEPARTMENT_ID: response.department,
              },
              (err, res) => {
                if (err) throw err;
                console.log("record inserted into Role Table");
                console.log("");
                console.log("");
                prompt();
              }
            );
          });

//enable 'view': departments, employees, roles
function viewDepartments() {
    const query = `SELECT id, NAME
    FROM department `;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      prompt();
    });
  }