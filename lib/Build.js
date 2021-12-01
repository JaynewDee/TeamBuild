// Initialize critical global dependencies
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

// Import models
const Manager = require('./Manager.js')
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// Initialize array of employee objects
const roster = [];


// Define the essential prompt flow as object class Build, for a new instance of application
     // Dynamic properties manipulated by the returned answers object through inquirer
class Build {
     constructor(teamname, roster) {
          this.teamname = teamname;
          this.members = 0;
          this.roster = roster;
     }
     // Initializes prompt sequence
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

     // Prompts user for Manager information should answers.manager return true
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
               return this.manager = teamManager;
          }).catch((err) => {
               console.error(err)
          }).finally(() => {
               this.options()
          })
     };

     // Builds Engineer object based on Employee class
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
          ]).then((answers) => {
               let {
                    engName,
                    engId,
                    engEmail,
                    engGit
               } = answers;
               let newEng = new Engineer(engName, engId, engEmail, engGit);

               this.members++;
               roster.push(newEng);
               this.engineer = newEng;
          }).catch((err) => {
               console.error(err)
          }).finally(() => {
               this.options();
          })

     };
     // Builds Intern object based on Employee class
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
          ]).then((answers) => {
               let {
                    intName,
                    intId,
                    intEmail,
                    intSchool
               } = answers;
               let newInt = new Intern(intName, intId, intEmail, intSchool);

               this.members++;
               roster.push(newInt);
               this.intern = newInt;
          }).catch((err) => {
               console.error(err)
          }).finally(() => {
               this.options()
          })
     }

     // Prompts user to choose which type of employee to add
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
          }]).then((answers) => {
               if (answers.choice === 'Add Intern') {
                    this.buildIntern();


               } else if (answers.choice === 'Add Engineer') {
                    this.buildEng();


               } else if (answers.choice === 'Finish team creation') {
                    this.finalize();

               }
          }).catch((err) => {
               console.error(err)
          })
     }

     // Concludes creation of team and builds HTML with team member cards
     finalize() {
               console.log(roster);
               if (this.members === 0) {
                    console.log(chalk.red('Your team is empty. :(  Run the command <$ node index.js> to try again.'));
                    process.exit();

               } else {
                    fs.readFileSync('dist/team.html', 'utf8');
                    fs.appendFile('dist/team.html',
                         `
                         <nav>
                              <div class="nav-wrapper">
                              <h3 class="brand-logo center">${this.teamname}</h3>
                              </div>
                         </nav>
               `,
                         (err) => {
                              console.error(err)
                         }
                    )
                    roster.map((employee) => {
                              if (employee.getRole() == "Manager") {
                                   employee =
                                        `
                         <div id="manager" class="col s3 employee">
                                   <div class="col s12">
                                        <div class="card blue-grey darken-1">
                                             <div class="card-content white-text">
                                                  <span class="card-title">${employee.name}</span>
                                                       <h6>
                                                            Role: ${employee.getRole()}
                                                       </h6>
                                                       <p>
                                                            ID #: ${employee.id}
                                                       </p>
                                                       <p>
                                                            Office #: ${employee.officeNumber}
                                                       </p>
                                                       <p>
                                                       
                                                       </p>
                                             </div>
                                             <div class="card-action">
                                                  <a href="mailto:${employee.email}">Email: ${employee.email}</a>
                                             </div>
                                        </div>
                                   </div>
                         </div>
                         `;

                                   fs.appendFile('dist/team.html', employee, (err) => {
                                        console.error(err)
                                   })

                              } else if (employee.getRole() == "Engineer") {
                                   employee =
                                        `
                         <div id="engineer" class="col s3 employee">
                                   <div class="col s12">
                                        <div class="card blue-grey darken-1">
                                             <div class="card-content white-text">
                                                  <span class="card-title">${employee.name}</span>
                                                       <h6>
                                                            Role: ${employee.getRole()}
                                                       </h6>
                                                       <p>
                                                            ID #: ${employee.id}
                                                       </p>                                   
                                             </div>
                                             <div class="card-action">
                                                  <a href="https://github.com/${employee.github}">GitHub: ${employee.github}
                                                  </a>
                                                  <a href="mailto:https://github.com/${employee.email}">Email: ${employee.email}</a>
                                             </div>
                                        </div>
                                   </div>
                         </div>
                         `;

                                   fs.appendFile('dist/team.html', employee, (err) => {
                                        console.error(err)
                                   })

                              } else if (employee.getRole() == "Intern") {

                                   employee =
                                        `
                         <div id="intern" class="col s6 employee">
                                   <div class="col s12">
                                        <div class="card blue-grey darken-1">
                                             <div class="card-content white-text">
                                                  <span class="card-title">${employee.name}</span>
                                                       <h6>
                                                            Role: ${employee.getRole()}
                                                       </h6>
                                                       <p>
                                                            ID #: ${employee.id}
                                                       </p>
                                                       <p>
                                                            School: ${employee.school}
                                                       </p>                              
                                             </div>
                                             <div class="card-action">
                                                  <a href="mailto:${employee.email}">Email: ${employee.email}</a>
                                             </div>
                                        </div>
                                   </div>d
                         </div>
                         `;

                                   fs.appendFile('dist/team.html', employee, (err) => {
                                        console.error(err)
                                   })
                              }
                         }
                    )
               }
          }
     }
     
     
     
     module.exports = Build;