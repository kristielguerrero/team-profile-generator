// Required packages
const inquirer = require('inquirer');
const fs = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

var teamEmployees = [];

var init = () => {
  addEmployee();
};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'teamRole',
        message: 'What team member are you adding?',
        choices: [
          'Manager',
          'Engineer',
          'Intern',
          "I'm done: Generate Profile",
        ],
      },
    ])
    .then((choices) => {
      switch (choices.teamRole) {
        case 'Manager':
          addManager();
          break;
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        case 'No other employees':
          generateHTML(teamEmployees);
          break;
      }
    });
}

// function addEmployee() {
//   inquirer.prompt(add);
// }

function addManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'manName',
        message: "What is the team memember's name?",
      },
      {
        type: 'number',
        name: 'manID',
        message: "What is the team memember's ID number?",
      },
      {
        type: 'input',
        name: 'manEmail',
        message: "What is the team memember's email?",
      },
      {
        type: 'input',
        name: 'manEmail',
        message: "What is the team memember's office number?",
      },
    ])
    .then((answers) => {
      const m = new Manager(
        answers.mName,
        answers.mId,
        answers.mEmail,
        answers.mOfficeNumber
      );
      teamEmployees.push(m);
      console.log('Added to the team!');
      addEmployee();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the team memember's name?",
      },
      {
        type: 'input',
        name: 'engineerID',
        message: "What is the team memember's ID?",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the team memember's email?",
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the team memember's Github name?",
      },
    ])
    .then((answers) => {
      const e = new Engineer(
        answers.eName,
        answers.eId,
        answers.eEmail,
        answers.eGithub
      );
      teamEmployees.push(e);
      console.log('Added to the team!');
      addEmployee();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: "What is the team member's name?",
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the team member's ID?",
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the team member's email?",
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What is the team member's school/program?",
      },
      {
        type: 'input',
        name: 'internGithub',
        message: "What is the team member's github?",
      },
    ])
    .then((answers) => {
      const i = new Intern(
        answers.iName,
        answers.iId,
        answers.iEmail,
        answers.iSchool
      );
      teamEmployees.push(i);
      console.log('Added to the team!');
      addEmployee();
    });
}

// function generateHTML(teamEmployees) {
//   fs.writeFileSync('./dist/index.html', createPage(teamEmployees));
// }

function writeToFIle(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`File created: \t ${fileName}`)
  );
}
init();
