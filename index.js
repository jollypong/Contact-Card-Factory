//required files
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./lib/html');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Empty arrays to add members to 
let team = [];

//instructions appearing on console (terminal)
console.log(
    "---------------------------Team Contact Generator: ------------------------\n--------Answer the following questions to create your Team Contact!--------"
    )

//function to add info to team
const addInfo = () => {
    inquirer.prompt
        ([
            {
                type: 'input',
                name: 'name',
                message: "What is the member's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log ("Cannot create member without name!");
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the member's ID? (please input ID number, ID's cannot start with 0)",
                validate: nameInput => {
                    if  (isNaN(nameInput)) {
                        console.log ("Please enter a valid ID number")
                        return false; 
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the member's E-mail?",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log ('Please enter valid form of email!')
                        return false; 
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the role of this member?",
                choices: ["Manager", "Engineer", "Intern"],
            },
            //if Manager: 
            {
                type: "input",
                name: `officeNumber`,
                message: `What is the team members office number?`,
                when: ({ role }) => {
                    if (role === "Manager") {
                        return true;
                    } return false;
                },
            },
            //if Engineer
            {
                type: "input",
                name: `githubName`,
                message: `What is the team members github?`,
                when: ({ role }) => {
                    if (role === "Engineer") {
                        return true;
                    } return false;
                },
            },
            //if Intern
            {
                type: "input",
                name: `school`,
                message: `What is the team members school?`,
                when: ({ role }) => {
                    if (role === "Intern") {
                        return true;
                    } return false;
                },
            }
        ]).then((data) => {

            //switch case for data for each role, then push to team[]
            switch (data.role) {
                case "Manager":
                    let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                    team.push(manager);
                    break;
                case "Engineer":
                    let engineer = new Engineer(data.name, data.id, data.email, data.githubName);
                    team.push(engineer);
                    break;
                case "Intern":
                    let intern = new Intern(data.name, data.id, data.email, data.school);
                    team.push(intern);
                    break;
            }
            createTeam(); 
            return;
        })
};

//function to ask if wanting to add team (initial function?)
const createTeam = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addMember',
            message: "Would you like to add member?",
            default: 'Y',
        }
    ]).then((confirm) => {
        if (confirm.addMember === true) {
            addInfo();
        } else {
            let createHTML = generateHTML(team);
            renderHTML("./dist/team.html", createHTML)
        }
    })
};

//function to render HTML file
function renderHTML(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log(`Your Team Contacts have been generated.`);
    });
};

createTeam();