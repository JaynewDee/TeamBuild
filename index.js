const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// let teamManager;
// let intern1;
// let intern2;
// let engineer1;
// let engineer2;
// let engineer3;


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
]);

const teamOptions = ([
     {
          type: 'list',
          name: 'choice',
          message: "What would you like to do?",
          choices: [
               'Add Intern',
               'Add Engineer',
               'Finish team creation'
          ]
     }
]);

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
]);

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
]);

const internPrompts = ([
     {
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
          validate: function(email) {
               return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
          }
     },
     {
          type: 'input',
          name: 'intSchool',
          message: "At what school is your intern currently enrolled?"
     }
]);

(async function () {
     const {answers} = await inquirer
     .prompt(intro)
     .then((answers) => async function() {
          console.log(answers)
          if (answers.manager === true) {
               const {teamManager} = async function() {await inquirer.prompt(manPrompts)
               .then((answers) => {
                    let {manName, manId, manEmail, officeNum} = answers;
                    return answers = new Manager(manName, manId, manEmail, officeNum);            
               })
               .catch((error) => console.log(error))
          }}
          else if (answers.manager === false) {
               return;
          }
     })
     .then(teamOptions)
     .then((answers) => {
          if (answers.choice === 'Add Intern') {
               inquirer.prompt(internPrompts)
               .then((answers) => {
                    let {intName, intId, intEmail, intSchool} = answers;
                    return {} = new Intern(intName, intId, intEmail, intSchool);
               })
               .catch((error) => console.log(error))
          }
          else if (answers.choice === 'Add Engineer') {
               inquirer.prompt(engPrompts)
               .then((answers) => {
                    let {engName, engId, engEmail, engGit} = answers;
                    return {} = new Engineer(engName, engId, engEmail, engGit);
               })
               .catch((error) => console.log(error))
          }
          else if (answers.choice === 'Finish team creation') {
               return;
          }
     })
     .catch((error) => console.log(error));

