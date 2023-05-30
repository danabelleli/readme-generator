// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: "Your Project's Title?",
    name: 'title',
},
{
    type: 'input',
    message: 'Description',
    name: 'Description',
},
{
    type: 'input',
    message: 'Table of Contents',
    name: 'Table of Contents',
},
{
    type: 'input',
    message: 'Usage',
    name: 'Usage',
},
{
    type: 'input',
    message: 'Credits',
    name: 'Credits',
},
{
    type: 'input',
    message: 'License',
    name: 'License',
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}`, `${data}\n`, (err) =>
        // TODO: Describe how this ternary operator works
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(() => writeToFile('readme.md', process.argv[2])
        );
}

// Function call to initialize app
init();
