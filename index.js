const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');



const intro = ([
     {
          type: 'input',
          name: 'teamName',
          message: 'What is the name of your team?'
     },
     {
          type: 'confirm',
          name: 'manager',
          message: 'Does your team have a manager?',
     },
])

const manPrompts = ([
     {
          type: 'input',
          name: 'manName',
          message: "What is your manager's name?"
     },
     {
          type: 'input',
          name: 'manId',
          message: "What is your manager's ID #?"
     },    
     {
          type: 'input',
          name: 'manEmail',
          message: "What is your manager's email address?",
          validate: function(email) {
               return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
          }
     },
     {
          type: 'input',
          name: 'officeNum',
          message: "What is your manager's Office #?"
     }
])

const engPrompts = ([
     {
          type: 'input',
          name: 'engName',
          message: "What is the name of your engineer?"
     },
     {
          type: 'input',
          name: 'engId',
          message: "What is your engineer's ID #?"
     },
     {
          type: 'input',
          name: 'engEmail',
          message: "What is your engineer's email address?",
          validate: function(email) {
               return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
          }
     },
     {
          type: 'input',
          name: 'engGit',
          message: "What is your engineer's GitHub username?"
     }

])
inquirer.prompt(intro)
     .then((answers) => {
          console.log(answers)
          if (answers.manager === true) {
               inquirer.prompt(manPrompts)
               .then((answers) => {
                    let {manName, manId, manEmail, officeNum} = answers;
                    let teamManager = new Manager(manName, manId, manEmail, officeNum);                   
               })
               .catch((error) => console.log(error))
          }
          else if (answers.manager === false) {
               inquirer.prompt(engPrompts)
          }
     })
