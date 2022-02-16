//required files
const inquirer = require('inquirer');
const makeHTML = require('./lib/html')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Empty arrays to add members to 
let team = [];
//instructions appearing on console (terminal)
console.log("Team Contact Generator:\n Answer the following questions to create your Team")

//function to add info to team
const addInfo = () => {
    inquirer.prompt
        ([
            {
                type: 'input',
                name: 'name',
                message: "What is the member's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the member's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the member's E-mail?",
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the role of this member?",
                choices: ["Manager", "Engineer", "Intern"]
            },
            //if Manager: 
            {
                type: "input",
                message: `What is the team members office number?`,
                when: ({ role }) => {
                    if (role === "Manager") {
                        return true;
                    } return false;
                },
                name: `officeNumber`,
            },
            //if Engineer
            {
                type: "input",
                message: `What is the team members github?`,
                when: ({ role }) => {
                    if (role === "Engineer") {
                        return true;
                    } return false;
                },
                name: `githubName`,
            },
            //if Intern
            {
                type: "input",
                message: `What is the team members school?`,
                when: ({ role }) => {
                    if (role === "Intern") {
                        return true;
                    } return false;
                },
                name: `school`,
            }
        ]).then((data) => {
            console.log(data);
            //switch case for data for each role, then push to team[]
            switch (data.role) {
                case "Manager":
                    let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                    team.push(manager);
                    console.log(team);
                    break;
                case "Engineer":
                    let engineer = new Engineer(data.name, data.id, data.email, data.githubName);
                    team.push(engineer);
                    console.log(team);
                    break;
                case "Intern":
                    let intern = new Intern(data.name, data.id, data.email, data.school);
                    team.push(intern);
                    console.log(team);
                    break;
            }
            createTeam(); 
            return;
        })
};

const createTeam = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addMember',
            message: "Would you like to add member?",
            default: 'Y',
        }
    ]).then((confirm) => {
        console.log(confirm);
        if (confirm.addMember === true) {
            addInfo();
        } else {
            makeHTML(team);
        }
    })
};

console.log(makeHTML)
createTeam();