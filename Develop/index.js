// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
    type: 'list',
    message: 'License',
    name: 'License',
    choices: [
        'Apache License 2.0',
        'MIT License',
        'GNU GPL v3',
        'None'
    ]
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // create a readme file
    fs.appendFile(`${fileName}`,
        // add to the reade me the title and the user input
        `## Title\n${data.Title}\n\n` +
        `# Description\n${data.Description}\n\n` +
        `# Table of Contents\n${data.TableOfContents}\n\n` +
        `# Usage\n${data.Usage}\n\n` +
        `# Credits\n${data.Credits}\n\n` +
        `# License\n${data.License}\n`,
        (err) =>
            err ? console.error(err) : ''
    );

    const licBadge = generateMarkdown.renderLicenseBadge(data.License);
    fs.appendFile(`${fileName}`,
        `${licBadge}\n`, { flag: 'a+' },
        (err) =>
            err ? console.error(err) : ''
    );

    const licLink = generateMarkdown.renderLicenseLink(data.License);
    fs.appendFile(`${fileName}`,
        `${licLink}\n`, { flag: 'a+' },
        (err) =>
            err ? console.error(err) : ''
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


