const inquirer = require('inquirer');
const chalk = require('chalk');


const Manager = require('./Manager.js')
const Engineer = require('./Engineer');
const Intern = require('./Intern');



class Build {
     constructor(teamname, ) {
          this.members = 0;
          this.teamname = teamname;

     }

     start() {
          inquirer.prompt(([{
                         type: 'input',
                         name: 'teamName',
                         message: chalk.blue('What is the name of your team?')
                    },
                    {
                         type: 'confirm',
                         name: 'manager',
                         message: 'Does your team have a manager?',
                    },
               ]))
               .then((answers) => {
                    this.teamname = answers.teamName;
                    if (answers.manager) {
                         console.log(answers.manager)
                         this.buildMan();
                    } else {
                         this.buildEng();
                    }
               })
     }

     buildMan() {
          inquirer.prompt([{
                    type: 'input',
                    name: 'manName',
                    message: "What is your manager's name?",
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
                    validate: function (email) {
                         return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    }
               },
               {
                    type: 'input',
                    name: 'officeNum',
                    message: "What is your manager's Office #?"
               }
          ]).then((answers) => {
               let {manName, manId, manEmail, officeNum} = answers;
               let teamManager = new Manager(manName, manId, manEmail, officeNum);
               return teamManager;
          })
     }
     buildEng() {
          inquirer.prompt([
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
                    validate: function (email) {
                         return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    }
               },
               {
                    type: 'input',
                    name: 'engGit',
                    message: "What is your engineer's GitHub username?"
               }
          ])
          .then((answers) => {
               let {engName, engId, engEmail, engGit} = answers;
               let newEng = new Engineer(engName, engId, engEmail, engGit);
               console.log(newEng);
          })         
     }
     buildIntern () {[
          inquirer.prompt({
               type: 'input',
               name: 'intName',
               message: "What is the name of your intern?"
          },
          {
               type: 'input',
               name: 'intId',
               message: "What is your intern's ID #?"
          },
          {
               type: 'input',
               name: 'intEmail',
               message: "What is your intern's email address?",
               validate: function (email) {
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
               }
          },
          {
               type: 'input',
               name: 'intSchool',
               message: "At what school is your intern currently enrolled?"
          })
     ]}
}


module.exports = Build;