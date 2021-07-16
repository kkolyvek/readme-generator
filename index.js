// ---------------------
// INIT GLOBAL VARIABLES
// ---------------------
// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your full name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter the GitHub repository name:',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email'
    },
    {
        type: 'confirm',
        message: 'Are you giving credit to any contributors?',
        name: 'credit'
    },
    {
        type: 'list',
        message: 'Select license:',
        choices: [
                'Unlicensed',
                'MIT License',
                'Apache License',
                'GNU GPL License'
            ],
        name: 'license'
    }
];



// ---------
// FUNCTIONS
// ---------
// Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success! ReadMe file created.');
    });
};

// Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log('Generating file...');

            console.log(response)

            // generate markdown file
            const md = generateMarkdown(response);

            // all done, create file
            writeToFile('readme.md', md);
        });
};

// Function call to initialize app
init();