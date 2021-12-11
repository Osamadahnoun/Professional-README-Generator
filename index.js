// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./generate')

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Please Provide a Description for Your Project.', 'What are the step-by-step instructions required to install your project?.', 'Provide instructions and examples for use.', 'Please add screenshot using this syntax: ![alt text](assets/images/screenshot.png)', 
'What are your contribution guidelines for this project?', 'Would you like to write tests for your application?', 'Write tests for your application. Then provide examples on how to run them.', 'What is your github username?', 'What email would you like to be contacted with?', 'Which README license would you like to use?'];


const askQuestions = data => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmScreenShot',
        //     message: questions[4]
        // },
        {
            type: 'input',
            name: 'screenshot',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[5]
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'Test',
            message: questions[7],
            when: ({ confirmTest }) => confirmTest
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[10],
            choices: ['MIT License', 'Apache License 2.0', 'Boost Software License 1.0']
          },
        {
            type: 'input',
            name: 'username',
            message: questions[8]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[9]
        },
    ]);
};

askQuestions().then(answers => {
    // console.log(answers.title)
    // console.log(answers.description)
    const pageMarkup = generate(answers);
    fs.writeFile('README.md', pageMarkup, err => {
          if (err) {
          console.log(err);
           return;
          }
        console.log('Page created! Check out index.html in this directory to see it!');
    }
    )
})

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
   
// }

// TODO: Create a function to initialize app
// function init() {
// }

// Function call to initialize app
// init();
