// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  'Title of the proyect:',
  'Description of the proyect:',
  'Installation of the proyect:',
  'Usage of the proyect:',
  'License of the proyect:',
  'Contributing:',
  'Tests of the proyect:',
  'Questions about the proyect:',
  'Github username:',
  'Email address:'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'desc',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'instal',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'use',
    },
    {
        type: 'list',
        message: questions[4],
        name: 'lic',
        choices: [
            'Creative Commons',
            'MIT License',
            'Eclipse',
            'GNU',
            'The Organization for Ethical Source',
            'IBM',
            'Open Data Commons'
        ]
    },
    {
        type: 'input',
        message: questions[5],
        name: 'people',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'tests',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'quesions',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'username',
    },
    {
        type: 'input',
        message: questions[9],
        name: 'email',
    },
    
  ])

  .then((res) =>
    {
        let name = res.title + '-README.md';
        writeToFile(name, generateMarkdown(res));
    }
  )
}

// Function call to initialize app
init();
