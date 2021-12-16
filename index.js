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
                name: 'managerID',
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
            fs.writeFile('index.html', generateHTML(answers), 'UTF-8',(err)=>{
                if(err){
                    console.log(err)
                }else {
                    console.log('Success!')
                }
            })
            console.log(answers)
            secondPrompt()
        })
}


function secondPrompt() {
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
        if (data.addMore == 'No')
        { fs.appendFile('index.html', endProcess(), 'UTF-8', (err)=>{
            if (err){
                console.log(err)
            } else {
                console.log('Thank you for using the Team Profile Generator! Click on the index.html file. Then right click anywhere on it and click "Open in Default Browser" to see your team!')     
            }
        })
        }
    })
}

function addEngineer() {
    inquirer.prompt([
{
type: 'input',
message: 'What is the engineers name?',
name:'name'
},
{
type: 'input',
message:'What is the engineers ID?',
name: 'ID'
},
{
type: 'input',
message: 'What is the engineers email?',
name: 'email',
},
{
type: 'input',
message: 'What is the engineers GitHub username?',
name:'username'
}

    ])
    .then((answers) => {
        fs.appendFile('index.html', generateEngineer(answers), 'UTF-8', (err) =>{
            if (err){
                console.log(err)
            } else {
                console.log('Successfully added Engineer!')
            }
            secondPrompt()
        })
    })
}

 
function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name:'name'
            },
            {
            type: 'input',
            message:'What is the interns ID?',
            name: 'ID'
            },
            {
            type: 'input',
            message: 'What is the interns email?',
            name: 'email',
            },
            {
            type: 'input',    
            message: 'What school does the intern attend?',    
            name: 'school'    
            },
    ])
    .then((answers) => {
        fs.appendFile('index.html', generateIntern(answers), 'UTF-8', (err) => {
            if(err){
                console.log(err)
            }else {
                console.log(' Succesfully Added Intern!')
            }
        })
        secondPrompt()
         })  
}

function generateHTML({managerName,managerID,managerEmailAddress,managerOfficeNumber}){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> 
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="card" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SZai1T5EDDaee4FnstiiwB23CpsRSODqag&usqp=CAU" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <h3 class="card-text">${managerName}</h3>
      <p class="card-text">ID:${managerID}</p>
      <p class="card-text">Email:${managerEmailAddress}</p>
      <p class="card-text">Office Number:${managerOfficeNumber}</p>
    </div>
    </div> 
    `
    }

    function generateEngineer ({name, ID, email, username}) {
     return `
     <div class="card" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SZai1T5EDDaee4FnstiiwB23CpsRSODqag&usqp=CAU" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <h3 class="card-text">${name}</h3>
      <p class="card-text">ID:${ID}</p>
      <p class="card-text">Email:${email}</p>
      <p class="card-text">GitHub Username:<a href="https://github.com/${username}">${username}</a></p>
    </div>
    </div>  
     `   
    }

    function generateIntern ({name, ID, email, school}){
        return `
        <div class="card" style="width: 18rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SZai1T5EDDaee4FnstiiwB23CpsRSODqag&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <h3 class="card-text">${name}</h3>
          <p class="card-text">ID:${ID}</p>
          <p class="card-text">Email:${email}</p>
          <p class="card-text">Attends:${school}</p>
        </div>
        </div>        
        `
    }

    function endProcess(){
        return`
      </body>  
      </html>  
    `
    }