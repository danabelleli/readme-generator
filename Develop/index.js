// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["Your Project's Title?", "Description", "Table of Contents", "Installation", "Usage", "Credits", "License"];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}`, `${data}\n`, (err) =>
        // TODO: Describe how this ternary operator works
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('readme.md', process.argv[2]);
}

// Function call to initialize app
init();
