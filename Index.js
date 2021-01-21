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
            //default: "Josh",
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
            //default: "019",
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
            //default: "josh.beedle@gmail.com",
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
            //default: "A1",
            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                }
            }
        },
    ])
  /*   .then(() => {
        return promptTeamChoices();
    }) */
}

// Function to prompt for team info
const promptTeamChoices = () => {
    inquirer.prompt({
        type: 'list',
        name: 'teamChoices',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'None, I am finished building the team.']
    })
    .then(({ teamChoices }) => {
        if (teamChoices === "Engineer") {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'engName',
                    message: "What is your engineer's name?",
                    //default: "Joe",
                    validate: engNameInput => {
                        if (engNameInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's name!");
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engId',
                    message: "What is your engineer's ID?",
                    //default: "001",
                    validate: engIdInput => {
                        if (engIdInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's ID!");
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engEmail',
                    message: "What is your engineer's email?",
                    //default: "engineer@mail.com",
                    validate: engEmailInput => {
                        if (engEmailInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's email address!");
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engGithub',
                    message: "What is your engineer's GitHub username?",
                    //default: "engineerhub",
                    validate: engGitInput => {
                        if (engGitInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's GitHub!");
                        }
                    }
                }
            ])
            .then((data) => {
                const newEngineer = new Engineer(data.engName, data.engId, data.engEmail, data.engGithub);
                employeesArray.push(newEngineer);
                promptTeamChoices();
            });
        } else if (teamChoices === "Intern") {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'intName',
                    message: "What is your intern's name?",
                    //default: "Jane",
                    validate: intNameInput => {
                        if (intNameInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's name!");
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'intId',
                    message: "What is your intern's ID?",
                    //default: "002",
                    validate: intIdInput => {
                        if (intIdInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's ID!");
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'intEmail',
                    message: "What is your intern's email?",
                    //default: "intern@mail.com",
                    validate: intEmailInput => {
                        if (intEmailInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's email address!");
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'intSchool',
                    message: "What school does your intern go to?",
                    //default: "UPenn",
                    validate: intSchoolInput => {
                        if (intSchoolInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's school!");
                        }
                    }
                }
            ])
            .then((data) => {
                const newIntern = new Intern(data.intName, data.intId, data.intEmail, data.intSchool);
                employeesArray.push(newIntern);
                promptTeamChoices();
            });
        } else {
            //console.log(employeesArray);
            const myPage = generatePage(employeesArray);
            writeFile(myPage)
            .then(writeFileResponse => {
                console.log(writeFileResponse.message);
                return;
            })
            .catch(err => {
                console.log(err);
                return;
            });
        }
    });
};


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
        const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice)
        employeesArray.push(newManager);
        promptTeamChoices();
    })
}

init();