// Include packages/methods/etc. needed for this app
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

const employeesArray = [];

// Prompt user with questions about Manager
const promptManagerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            default: "Josh",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's ID?",
            default: "019",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's ID!");
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            default: "josh.beedle@gmail.com",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email address!");
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?",
            default: "A1",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                }
            }
        },
        {
            type: 'list',
            name: 'teamChoices',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'None, I am finished building the team.']
        }
    ])
}

// Function to write HTML file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: `******************************************************************
HTML file created! Take a look at the new file in the dist folder!
******************************************************************`
            });   
        });
    });
};

// Function to initialize the application
function init() {
    console.log(`********************************************************
Welcome! Please answer the questions to build your team!
********************************************************`);
    promptManagerInfo()
    .then(data => {
        console.log(data);
        return data;
    })
    .then(data => {
        const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice)
        employeesArray.push(newManager);
        const myPage = generatePage(employeesArray);
        return myPage;
    })
    .then(myPage => {
        return writeFile(myPage);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
}

init();