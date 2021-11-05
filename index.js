const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

inquirer.prompt(questions)
     .then((answers) =>
          transferTemplate(answers))
     .catch((error) => console.log(error));

function transferTemplate(answersObj) {
     const genHTML = htmlTemplate(answersObj);
     fs.writeFile('myTeam.html', genHTML, (err) => 
     err ? console.log(err) : console.log('Creation of Team Page successful!'))
}



const htmlTemplate = ({
     teamName,
}) =>
     `
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>${teamName}</title>
</head>
<body>
     <h1>${teamName}</h1>
     
</body>
</html>
`