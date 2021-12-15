const inquirer = require("inquirer");
const fs = require("fs");

firstPrompt()
function firstPrompt() {
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
        ])
        .then((answers) => {
            console.log(answers)
            secondPrompt()
        })
}


function secondPrompt() {
   console.log('second prompt')
    inquirer.prompt(
        {
            type: 'list',
            message: 'Select if you would like to add an intern or engineer?',
            choices: ['Engineer', 'Intern', 'No'],
            name: 'addMore',
        },
    ).then(data => {
        if (data.addMore == 'Engineer') {
            addEngineer()
        }
        if (data.addMore =='Intern'){
            addIntern()
        }
        else{
            fs.writeFile
        }
    })
}

function addEngineer() {
    console.log('you added an Engineer!')
}
function addIntern(){
    console.log('you added an Intern!')
}
