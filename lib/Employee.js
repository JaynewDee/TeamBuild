// const inquirer = require("inquirer");


class Employee {
     constructor(name, id, email) {
          this.name = name;
          this.id = id;
          this.email = email;
     }

     getName() {   
          return this.name;
     }
     getId() {
          return this.id;
     }
     getEmail() {
          return this.email;
     }
          
     getRole() {
          return "Employee"
     }
}


module.exports = Employee;



// inquirer.prompt([
//      {
//           type: "input",
//           name: "name",
//           message: `What is your ${this}'s name?'`
//      }
// ]).then((answer) => {
//      answer = this.name
//      return answer;
// })