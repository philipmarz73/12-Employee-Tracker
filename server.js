const mysql = require("mysql")
const inquirer = require("inquirer");
const cTable = require("console.table");
// requiring mySql, inquirer and express packages and console.table to 
// test in Terminal 

// define db, make localhost connection
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
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
            
// get input to add to Department 
function addDepartment() {
    const deptData = [
      {
        type: "input",
        name: "Name",
        message: "please enter department name",
        description: "department name",
      // },
      }]};
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
    ]
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
    };
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
        ] 
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
        };
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
  function viewEmployees() {
    const query = `SELECT id, firstName, lastName,roleID,managerID
       FROM employee`;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      prompt();
    });
  }
  
  function viewRoles() {
    const query = `SELECT id, title, salary, department_ID
    FROM role`;
  
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      prompt();
    });
  }  
//   delete data from the three tables
function removeDepartment() {
    const query = `SELECT id, NAME
      FROM department`;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log("");
      console.log("please select id when deleting row")})
  
      const queryDelete = [
        {
          type: "input",
          name: "answer",
          message: "delete department by id",
        }
    ]
 
// delete from database in response to query and check for errors
inquirer.prompt(queryDelete).then((response) => {
    console.log(response.answer);

    const sql = `DELETE FROM department WHERE id = ?`;

    db.query(sql, response.answer, (err, res) => {
      if (err) throw err;
      console.log("record has been removed");
      prompt();
    });
  });
};
// remove employee information query
function removeEmployee() {
    const query = `SELECT id, firstName, lastName, roleID, managerID
      FROM employee`;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log("");
      console.log("please select id when deleting row");
    })
};
// delete employee by ID 
const employeeDelete = [
    {
      type: "input",
      name: "answer",
      message: "delete employee by id",
    },
  ];
// delete employee record from database in response to query and check for errors
  inquirer.prompt(employeeDelete).then((response) => {
    console.log(response.answer);

    const sql = `DELETE FROM employee WHERE id = ?`;

    db.query(sql, response.answer, (err, res) => {
      if (err) throw err;
      console.log("record has been removed");
      prompt();
    });
  
// 'delete employee role' method
function deleteRole() {
    const query = `SELECT id, title, salary, department_id
        FROM role`;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log("");
      console.log("please select id when deleting row");
    }) 
};
      
    const roleDelete = [
        {
          type: "input",
          name: "answer",
          message: "delete role by id",
        },
    ];
    
// remove employee role from database in response to query and check for errors
      inquirer.prompt(roleDelete).then((response) => {
        console.log(response.answer);
  
        const sql = `DELETE FROM role WHERE id = ?`;
        db.query(sql, response.answer, (err, res) => {
          if (err) throw err;
          console.log("record has been removed");
          prompt();
        })
      });
// add update functions
function updateDepartment() {
    const query = `SELECT id, NAME
      FROM department`;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log("");
      console.log("please select id when updating row");
    //   prompts for update information
      const deptUpdate = [
        {
          type: "input",
          name: "department_id",
          message: "Enter Department id",
        },
  
        {
          type: "input",
          name: "NAME",
          message: "Enter Department name ",
        }
      ]
  
    // update the table
    inquirer.prompt(deptUpdate).then((response) => {
        const sql = `UPDATE department SET NAME = ? where id = ?`;
        let data = [response.NAME, response.department_id];
  
        db.query(sql, data, (err, res) => {
          if (err) throw err;
          console.log("record has been updated")
          prompt()
      });   
    })
  })
};

// employee update
    function updateEmployee() {
        const query = `SELECT id, firstName, lastName, roleID, managerID FROM employee`;
        db.query(query, (err, res) => {
          if (err) throw err;
          console.table(res);
          console.log("");
          console.log("please select id(s) when updating row");
        
          const employeeUpdate = [
            {
              type: "input",
              name: "employee_id",
              message: "Enter employee id on far left",
            },
      
            {
              type: "input",
              name: "role_id",
              message: "Enter role id",
            }
          ]
       
        inquirer.prompt(employeeUpdate).then((response) => {
            const sql = `UPDATE employee SET roleID = ?  WHERE id = ?`;
            let data = [response.role_id, response.employee_id];
      
            db.query(sql, data, (err, res) => {
              if (err) throw err;
              console.log("record has been updated");
              prompt();
            })
        })
      });
    }; 

          
// employee role update
function updateRole() {
    const query = `SELECT id, salary
        FROM role`;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log("");
      console.log("please select id when updating row");

      const roleUpdate = [
        {
          type: "input",
          name: "role_id",
          message: "Enter role id",
        },
  
        {
          type: "input",
          name: "salary",
          message: "Enter Salary",
        },
      ]
    
      inquirer.prompt(roleUpdate).then((response) => {
        console.log(response.role_id);
        console.log(response.salary);
  
        const sql = `UPDATE role SET salary = ? where id = ?`;
        let data = [response.salary, response.role_id];
     
        db.query(sql, data, (err, res) => {
          if (err) throw err;
          console.log("record has been updated");
          prompt();
        })
      });
    });
}



      
      
