//required files
const inquirer = require('inquirer');
const fs = require('fs');

const makeHTML = require('./lib/html')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Empty arrays to add members to 
let Team = [];
//Empty array for contact info for members
let contactCard = [];
//instructions appearing on console (terminal)
console.log("Team Contact Generator:\n Answer the following questions to create your Team")

//function to create Team 
makeTeam => {
    inquirer.prompt[
        {
            type: 'input',
            name: 'name',
            messages: "What is the member's name?",
        },
        {
            type: 'input',
            name: 'ID',
            messages: "What is the member's ID?",
        },
        {
            type: 'input',
            name: 'Email',
            messages: "What is the member's Email?",
        },
        {
            type: 'list',
            name: 'role',
            messages: "What is the role of this member?",
            choices: ["Manager", "Engineer", "Intern"]
        }.then(function (userInput) {
            switch (userInput.role) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    console.log("Error, something went wrong!")
            }
        })
    ]
}

//function to addManager
addManager => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is Manager's office Number?"
        },
    ]).then(answer => {
        const manager = new manager(addManager.officeNumber);
};

//function to addEmployee
addEmployee => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'githubName',
            message: "What is Engineer's GitHub Username?"
        },
    ]).then(answer => {
        const engineer = new engineer(engineer.githubName)

    })
};

//function to addIntern
addIntern => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: "Which school is the intern from?"
        },
    ]);
};

