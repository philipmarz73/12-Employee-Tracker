# Employee Tracker


## Project Motivation

The ostensible motivation for creating this application was to build an interface known as a Content Management System. These systems make it easy for non-developers to view and interact with information stored in databases. This particular example was intended to run as a command-line application using Terminal in Visual Studio Code that would allow an Employer to manage a company's employees. The employer could view, update and add information about employees, their departments, and roles; information about employees would include their company First and Last Name, Title, Salary, Department, and Manager, if they have one. To achieve this, the developer would make use of Node, Inquirer and MySql as described in the following "Resources" section.


## Resources

The Developer was required to design a database schema containing three Tables: for Department, Role, and Employee. These Tables would define these categories using criteria such as Name, Title, Salary and ID. The schema was specifically designed to be used to construct a MySql database that could store the data locally and interact usefully with the Inquirer NPM package to respond to User input in the command-line-interface. Inquirer provides an easy way to capture user input using Node.js by allowing several methods for asking questions and returning answers from the user that can be accessed by a ". then" promise function. The MySQL NPM package connects to the database and makes such queries possible. Finally, "console.table", another useful NPM package, allows for the printing of MySQL rows to the console for viewing and User interaction.


## Requirements

In addition to requiring proper construction of the database tables to be used in MySQL, proper utiliztion of MySQL syntax to create "Joins" between the tables to maintain the relationships between them was also necessary. Use of a "seed.sql" file was recommended, and proved very useful for testing purposes, and to better understand the interrelations between the database tables. The exercise laid the groundwork for further development of the CMS; one came to understand how to extend the database structure to allow for additional database tables to be added and increased functionality. The structure of the code to accomplish the CMS design also pointed to ways to "modularize" parts of it using constructor functions and classes to streamline the code and extend its usefulness.


## Video Link

This link will show the basic functionality achieved by this application:
Thanks for watching!


## License

&copy;MIT












