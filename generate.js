const generateTest = TestText => {
    if (!TestText) {
        return '';
    }

    return `
## Tests
* ${TestText}`
}



module.exports = data => {
    const {title, description, installation, usage, screenshot, contributing, Test, username, email, license} = data;
    return `
# ${title}

## Description
* ${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
* ${installation}

## Usage
* ${usage}
* ${screenshot}

## Contributing
* ${contributing}
${generateTest(Test)}

## Questions
* [My Github Profile!](github.com/${username})
* Contact me at ${email}

##Badges
* 

## License
* Covered under the ${license}
 `
}