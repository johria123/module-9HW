// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },
      // Add more questions for other sections like installation, usage, license, contributing, tests, email, etc.
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
      },  
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponses) => {
        // userResponses.tableOfContents = generateTableOfContents();
        const markdownContent = generateMarkdown(userResponses);
        writeToFile('README.md', markdownContent);
      });
}

// Function call to initialize app
init();
