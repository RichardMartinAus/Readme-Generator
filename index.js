// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseElm = require('./utils/generateMarkdown');

// Questions for user using inquierer
const questions = () => [
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of the project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What usage instructions would you like to include?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines for your project.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?',
      },
      {
        type: 'checkbox',
        message: 'What liscence applies to your project?',
        name: 'license',
        choices: [
          'GNU AGPLv3',
          'GNU GPLv3',
          'GNU LGPLv3',
          'Mozilla Public License 2.0',
          'Apache License 2.0',
          'MIT License',
          'Boost Software License 1.0',
          'The Unlicense',
        ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ])
    .then((data) => {
      const docContent = generateREADME(data);
      // function to write the readme file with user inputs and below template
      fs.writeFile('README.md', docContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
      );
    }),
];

// Function to create README file
const generateREADME = ({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
  github,
  email,
}) =>
  `# ${title}

${licenseElm.renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${licenseElm.renderLicenseSection(license)}

${licenseElm.renderLicenseLink(license)}

## Contributing

${contribution}

## Tests

${test}

## Questions

My github username is ${github} and my profile can be found at [https://github.com/${github}], or email me at ${email} for any further questions of collaboration requests.`;

// Functions to call when the app is initialized by index.js
function init() {
  questions();
}

// Function call to initialize app
init();

