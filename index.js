//require files
const inquirer = require('inquirer');
const fs = require('fs');
const makeHTML = require('./assets/html');
//instructions appearing on console (terminal)

//function for inquirer

//questions for prompt
const addTeamMember = [
    {
        type: 'toggle',
        name: 'addTeamMember',
        message: 'Would you like to add to your team?',
        initial: true,
        active: 'yes',
        inactive: 'no',
    },
    {
        type: 'list',
        message: "What is this member's position?",
        name: 'position',
        choices: ['Manager, Engineer, Intern'],
        validate: userChoice => {
            if (userChoice) {
                return true;
            } else {
                console.log('Please make a selection');
                return false;
            }
    },
    {
        type: 'text',
        name: 'value',
        message: `What's your twitter handle?`
    }
]


//function to ask if want to add more?



//compile functions

//function to initialize app