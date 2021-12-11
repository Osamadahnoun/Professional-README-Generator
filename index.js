// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const generate = require('./generate')

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Please Provide a Description for Your Project.', 'What are the step-by-step instructions required to install your project?.', 'Provide instructions and examples for use.', 'Please add screenshot using this syntax: ![alt text](assets/images/screenshot.png)', 
'What are your contribution guidelines for this project?', 'Would you like to write tests for your application?', 'Write tests for your application. Then provide examples on how to run them.', 'What is your github username?', 'What email would you like to be contacted with?', 'Which license would you like to use for your README file?'];


const askQuestions = data => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: titleInput => {
                if(titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please provide a decription for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: InstallationInput => {
                if(InstallationInput) {
                    return true;
                }
                else {
                    console.log('Please provide instructions to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: UsageInput => {
                if(UsageInput) {
                    return true;
                }
                else {
                    console.log('Please provide examples and instructions for use!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'screenshot',
            message: questions[4],
            validate: ScreenshotInput => {
                if(ScreenshotInput) {
                    return true;
                }
                else {
                    console.log('Please provide a screenshot!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[5],
            validate: ContributeInput => {
                if(ContributeInput) {
                    return true;
                }
                else {
                    console.log('Please enter your contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'Test',
            message: questions[7],
            when: ({ confirmTest }) => confirmTest,
            validate: TestInput => {
                if(TestInput) {
                    return true;
                }
                else {
                    console.log('Please write tests for your application!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[10],
            choices: ['MIT', 'Apache 2.0', 'Boost Software 1.0']
          },
        {
            type: 'input',
            name: 'username',
            message: questions[8],
            validate: UsernameInput => {
                if(UsernameInput) {
                    return true;
                }
                else {
                    console.log('Please provide your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[9],
            validate: EmailInput => {
                if(EmailInput) {
                    return true;
                }
                else {
                    console.log('Please provide your email!');
                    return false;
                }
            }
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
        console.log('Page created! Check out README.md in this directory to see it!');
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
