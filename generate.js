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
* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Badges
* ![License](https://img.shields.io/badge/License-MIT-blue)

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

## License
* Covered under the ${license}
 `
}