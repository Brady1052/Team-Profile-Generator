const inquirer = require("inquirer");
const fs = require("fs");

firstPrompt()
function firstPrompt(){
inquirer
    .prompt([
        {
        type: 'input',
        message: "Please enter the team managers name",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "Please enter the managers employee ID",
        name: 'manageremail',
    },
        {
            type: 'input',
            message: 'Please enter the managers email address',
            name: 'managerEmailAddress',
        },
        {
            type: 'input',
            message: 'Please enter the managers office number',
            name: 'managerOfficeNumber',
        },
        {
            type: 'list',
            message: 'Select if you would like to add an intern or engineer?',
            choices: ['Engineer', 'Intern','No'],
            name: 'addInternorEngineer',
        },
    ])
        .then((answers)=> {
    if (answers.task == 'Engineer'){
        addEngineer()
    }
})
}
function addEngineer() {
    console.log('you added an Engineer!')
}
    //     {
    //         type: 'input',
    //         message: 'Provide instructions and examples of your project in use for the Usage section.',
    //         name: 'usage',
    //     },
    //     {
    //         type: 'input',
    //         message: 'If applicable, please enter guidelines for other developers wishing to contribute to your project',
    //         name: 'guidelines',
    //     },
    //     {
    //         type: 'input',
    //         message: 'If applicable, please provide testing related information',
    //         name: 'testing',
    //     },
    //     {
    //         type: 'list',
    //         message: "Choose a license for your project.",
    //         choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    //         name: 'license'
    //     }
    // ])
    // .then((answers) => {
    //     console.log(answers);
    //     fs.writeFile("index.html", generateHtml(answers), "utf-8", (err) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log("Success");
    //     })


    // });