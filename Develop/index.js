// TODO: Include packages needed for this application
//we are making sure packages are locked an loaded before we code anything.
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input ACTIVITY 19 
    //.catch will log errors for inquirer DO THIS TO SAVE YOURSELF!!!
    //q1, What is your project title?
    //q2, Add a description of your project?
    //q3, Table of Contents 
    //q4, Installation 
    //q5, Usage
    //q6, Credits
    //q7, License
    //q8, Badges
    //q9, Features
    //q10, Contributing 
    //q11, Tests 
const questions = [
    inquirer
    .prompt([{
            type: 'input',
            message: 'What is your project title?',
            name: '',
        },
        {
            type: 'input',
            message: 'Add a description of your project',
            name: '',
        },
        {
            type: 'input',
            message: 'Add your table of contents',
            name: '',
        },
        {
            type: 'input',
            message: 'How to Install',
            name: '',
        },
        {
            type: 'input',
            message: 'Usage Details',
            name: '',
        },
        {
            type: 'input',
            message: 'Credits',
            name: '',
        },
        {
            type: 'input',
            message: 'License',
            name: '',
        },
        {
            type: 'input',
            message: 'Badges',
            name: '',
        },
        {
            type: 'input',
            message: 'Future Contributing',
            name: '',
        },
        {
            type: 'input',
            message: 'Tests',
            name: '',
        },
    ])
    // .then((response) =>
    //     response.confirm === response.password ?
    //     console.log('Success!') :
    //     console.log('You forgot your password already?!')
    // )

];

// TODO: Create a function to write README file USE TEMPLATE LITERAL for data var 
//template literal here 

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        // TODO: Describe how this ternary operator works
        err ? console.error(err) : console.log('Commit logged!')
    );




}

// TODO: Create a function to initialize app this is where i run the prompt 
function init() {
    //ask questions
    //get response 
    //use response to pass to template literal
    //once template is finished call write file function

}

// Function call to initialize app
init();