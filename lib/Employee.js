const inquirer = require("inquirer");


class Employee {
     constructor(name, id, email) {
          this.name = name;
          this.id = id;
          this.email = email;
     }

     getName(answer) {
          inquirer.prompt([
               {
                    type: "input",
                    name: "name",
                    message: `What is your ${this}'s name?'`
               }
          ]).then((answer) => {
               answer = this.name
               return answer;
          })

     }
     getId() {
          inquirer.prompt([
               {
                    type: "input",
                    name: "id",
                    message: `What is your ${this}'s id?'`
               }
          ]).then((answer) => {
               return answer = this.id;
          })
     }
     getEmail() {
          inquirer.prompt([
               {
                    type: 'input',
                    name: 'manEmail',
                    message: "What is your manager's email address?",
                    validate: function (email) {
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.   ,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                         },
               }
          ]).then((answer) => {
               return answer = this.email;
          })}
          
     getRole() {
          return "Employee"
     }
}


module.exports = Employee;