# **TeamBuild**  
## *Team Profile Generator*  
  

### Description:
> This simple but efficient command-line application allows a user to quickly generate a nicely formatted HTML page displaying important information about the user's development team.  

### Summary of basic FEATURES:
  > - Uses node.js to initiate prompts, receiving input from the user about their team members.  
  > - Uses inquirer.js to control the question/answer data flow.  
  > - Uses the jest test suite package to validate an object-oriented approach to building employee objects.  
  > - Upon finalization of team creation, a local "team.html" file is appended with team member information.
  > - HTML file can be deployed and shared with team members and colleagues.
  > - Team member cards are populated with links to the Employee's email address, utilizing the user's default email program to quickly make contact with the team member.
  > - The github profile of any engineer on the team can be quickly navigated to through an included link on the engineer's team card.
  > - Uses the chalk npm package to provide styling to command-line text.  
  
### Snapshots:  
  > - ![Jest tests](/README-assets/tests.png)  
  > - ![Generated HTML](/README-assets/html.png)  
  > - ![Command-line prompts](/README-assets/prompts.png)
  
  

### Usage Instructions:  
  #### *NOTE*  
  > - The user must have node.js installed to use this application.
  > - General familiarity with the command line strongly recommended.
  > - Package dependencies:  
  >> ![NPM package.json](/README-assets/dependencies.png)  
  >> As long as these essential requirements are met the user must simply clone the repository to their local machine and run the command <$ node index.js> while at the root level of the application directory.