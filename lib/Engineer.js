const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
     constructor(name, id, email, github) {
          super(name, id, email);
          this.github = github;
     }

     getGitHub() {
          inquirer
               .prompt([{
               type: 'input',
               name: 'engGit',
               message: "What is your engineer's GitHub username?"
               }])
               .then((answer) => {this.github = answer.engGit})

     // getRole() {
     //      return 'Engineer'
     // }
}}

module.exports = Engineer;