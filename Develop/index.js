// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: "Your Project's Title?",
    name: 'Title',
},
{
    type: 'input',
    message: 'Description',
    name: 'Description',
},
{
    type: 'input',
    message: 'Table of Contents',
    name: 'TableOfContents',
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

    // create a readme file
    fs.appendFile(`${fileName}`,
        // add to the reade me the title and the user input
        `Title\n${data.Title}\n\n` +
        `Description\n${data.Description}\n\n` +
        `Table of Contents\n${data.TableOfContents}\n\n` +
        `Usage\n${data.Usage}\n\n` +
        `Credits\n${data.Credits}\n\n` +
        `License\n${data.License}\n\n`,
        (err) =>
            err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answer) => writeToFile('readme.md', answer)
        );
}

// Function call to initialize app
init();


