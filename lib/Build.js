const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

const Manager = require('./Manager.js')
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const roster = [];
const log = console.log;

class Build {
     constructor(teamname, manager, engineer, intern) {
          this.members = 0;
          this.teamname = teamname;
          this.manager = manager;
          this.engineer = engineer;
          this.intern = intern;
          this.roster = roster;
     }

     start() {
          inquirer.prompt([{
                         type: 'input',
                         name: 'teamName',
                         message: chalk.blue('What is the name of your team?')
                    },
                    {
                         type: 'confirm',
                         name: 'manager',
                         message: chalk.red('Does your team have a manager?'),
                    },
               ])
               .then((answers) => {
                    this.teamname = answers.teamName;
                    if (answers.manager) {
                         this.buildMan();
                    } else {
                         this.options();

                    }
               }).catch((error) => {
                    console.error(error)
               });
     };

     buildMan() {

           inquirer.prompt([{
                    type: 'input',
                    name: 'manName',
                    message: chalk.bgRed.bold("What is your manager's name?"),
               },
               {
                    type: 'input',
                    name: 'manId',
                    message: chalk.bgRed.bold("What is your manager's ID #?")
               },
               {
                    type: 'input',
                    name: 'manEmail',
                    message: chalk.bgRed.bold("What is your manager's email address?"),
                    validate: function (email) {
                         return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    }
               },
               {
                    type: 'input',
                    name: 'officeNum',
                    message: chalk.bgRed.bold("What is your manager's Office #?")
               }
          ]).then((answers) => {
               let {
                    manName,
                    manId,
                    manEmail,
                    officeNum
               } = answers;
               let teamManager = new Manager(manName, manId, manEmail, officeNum);
               this.members++;
               roster.push(teamManager);
               log(roster);
               return this.manager = teamManager;
          }).catch((err) => {
               console.error(err)
          }).
          finally(() => {
               this.options()
          })
     };
     buildEng() {
          inquirer.prompt([{
                         type: 'input',
                         name: 'engName',
                         message: chalk.bgRed.bold("What is the name of your engineer?")
                    },
                    {
                         type: 'input',
                         name: 'engId',
                         message: chalk.bgRed.bold("What is your engineer's ID #?")
                    },
                    {
                         type: 'input',
                         name: 'engEmail',
                         message: chalk.bgRed.bold("What is your engineer's email address?"),
                         validate: function (email) {
                              return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                         }
                    },
                    {
                         type: 'input',
                         name: 'engGit',
                         message: chalk.bgRed.bold("What is your engineer's GitHub username?")
                    }
               ])
               .then((answers) => {
                    let {
                         engName,
                         engId,
                         engEmail,
                         engGit
                    } = answers;
                    let newEng = new Engineer(engName, engId, engEmail, engGit);
                    
                    this.members++;
                    roster.push(newEng);
                    log(roster);
                    this.engineer = newEng;
               }).catch((err) => {
                    console.error(err)
               })
               .finally(() => {
                    this.options();
               })
               
     };
     buildIntern() {
          return inquirer.prompt([{
                         type: 'input',
                         name: 'intName',
                         message: chalk.bgRed.bold("What is the name of your intern?")
                    },
                    {
                         type: 'input',
                         name: 'intId',
                         message: chalk.bgRed.bold("What is your intern's ID #?")
                    },
                    {
                         type: 'input',
                         name: 'intEmail',
                         message: chalk.bgRed.bold("What is your intern's email address?"),
                         validate: function (email) {
                              return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                         }
                    },
                    {
                         type: 'input',
                         name: 'intSchool',
                         message: chalk.bgRed.bold("At what school is your intern currently enrolled?")
                    }
               ])
               .then((answers) => {
                    let {
                         intName,
                         intId,
                         intEmail,
                         intSchool
                    } = answers;
                    let newInt = new Intern(intName, intId, intEmail, intSchool);
                    this.members++;
                    roster.push(newInt);
                    log(roster);
                    this.intern = newInt;                    
               }).catch((err) => {
                    console.error(err)
               }).finally(() => {
                    this.options()
               })
               
               
     }
     options() {
           return inquirer.prompt([{
                    type: 'list',
                    name: 'choice',
                    message: chalk.blue("What would you like to do?"),
                    choices: [
                         'Add Intern',
                         'Add Engineer',
                         'Finish team creation'
                    ]
               }])
               .then((answers) => {
                    console.log(answers)
                    if (answers.choice === 'Add Intern') {
                         this.buildIntern();
                         

                    } else if (answers.choice === 'Add Engineer') {
                         this.buildEng();
                         

                    } else if (answers.choice === 'Finish team creation') {
                         this.finalize();
                         
                    }
               })
               .catch((err) => {
                    console.error(err)
               })
     }

     finalize() {
          console.log(roster);
          if (this.members === 0) {
               console.log(chalk.red('Your team is empty. :('))
          } else {
               fs.appendFile('dist/team.html', JSON.stringify(roster), 'utf8', (err) => {console.error(err)})
          }
     }
}

module.exports = Build;