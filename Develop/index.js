// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
// TODO: Create an array of questions for user input
// I don't know how to apply ...rest here. should I have an array to store everything first?
const generateReadMe = ({ title, description, installation, usage, license, contributing, tests, email, github}) =>
`
# ${title} 

<sub>![License](https://img.shields.io/badge/License-${license.split('-').join('')}-blue.svg)</sub>

### Description

<sub>${description}</sub>
___
## Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
___

## Installation
<sub>${installation}</sub>

## Usage
<sub>${usage}</sub>

## License

Please visit [License link](https://choosealicense.com/licenses/${license.split(' ').join('').toLowerCase()}/)


## Contributing
${contributing}

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Tests
<sub>${tests}</sub>

## Questions
<sub>Feel free to submit your questions under the ISSUES of the repository [(Click Here)](https://github.com/${github}) or email me at [your email](mailto:${email})</sub>
`;



function prompt(){inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project',
    },
    {
      type: 'input',
      name: 'description',
      message: `Please briefly describe your project. Please attempt to have your answers covering the following questions
        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?
        - What makes your project stand out?`,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What is your license type?',
      choices:['MIT', `agpl-3.0`,`mpl-2.0`,`apache-2.0`,`bsl-1.0`]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How would you like people to contribute your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your Github username',
    },
])
.then((answers) => {
    const readMeContent = generateReadMe(answers);
   fs.writeFile(`./readmes/${answers.title}.md`, readMeContent, (err)=>{
    err? console.log(err) : console.log("Readme file has been generated. Please go ahead and see if any changes are needed")
   })
});
}

function init() {
    console.log(`Free Readme Generator App`);
    prompt()
};

init();
