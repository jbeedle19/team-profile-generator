// Include packages/methods/etc. needed for this app
const inquirer = require('inquirer');
const fs = require('fs');

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
                    console.log("Please enter the team manager's ID!");
                }
            }
        },
    ])
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML file created! Take a look at the new file in the dist folder!'
            });   
        });
    });
};