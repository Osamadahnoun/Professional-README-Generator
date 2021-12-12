const generateTest = TestText => {
    if (!TestText) {
        return '';
    }

    return `
## Tests
* ${TestText}`
}

const generateBullet = TestBullet => {
    if (!TestBullet) {
        return '';
    }

    return `
* [Tests](#tests)`
}

module.exports = data => {
    const {title, description, installation, usage, screenshot, contributing, Test, confirmTest, username, email, license} = data;
    let licenseStr = JSON.stringify(license);
    licenseStr = licenseStr.substring(2, licenseStr.length - 2);
    const licenseStrMod = licenseStr.split(' ').join('');
    return `
# ${title}

## Description
* ${description}

## Table of Contents
* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
${generateBullet(Test)}
* [Questions](#questions)

## Badges
* ![License](https://img.shields.io/badge/License-${licenseStrMod}-blue)

## Installation
* ${installation}

## Usage
* ${usage}
* ${screenshot}

## Contributing
* ${contributing}
${generateTest(Test)}

## Questions
* [My Github Profile](https://www.github.com/${username})
* If you have any questions, feel free to reach me at ${email}

## License
* Covered under the ${license} license.
 `
}
