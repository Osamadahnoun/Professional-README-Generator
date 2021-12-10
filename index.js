// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Please Provide a Description for Your Project', 'What are the steps required to install your project? Recommended (Provide a numbered list).', 'Provide instructions and examples for use. (A screenshot can be added in the following step).', 'Would you like to add a screenshot to the usage section?', 'Please add screenshot using this syntax: ![alt text](assets/images/screenshot.png)', 
'What are your contribution guidelines for this project?', 'Would you like to write tests for your application?', 'Write tests for your application. Then provide examples on how to run them.', 'What is your github username?', 'What email would you like to be contacted with?'];


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
        {
            type: 'confirm',
            name: 'confirmScreenShot',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'screenshot',
            message: questions[5],
            when: ({ confirmScreenShot }) => confirmScreenShot
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[6]
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'Test',
            message: questions[8],
            when: ({ confirmTest }) => confirmTest
        },
        // {
        //     type: 'checkbox',
        //     name: 'languages',
        //     message: 'What did you this project with? (Check all that apply)',
        //     choices: ['']
        //   },
        {
            type: 'input',
            name: 'username',
            message: questions[9]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[10]
        },
    ]);
};

askQuestions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', 'HI', err => {
          if (err) {
          console.log(err);
           return;
          }
        console.log('Page created! Check out index.html in this directory to see it!');
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
}

// Function call to initialize app
init();
