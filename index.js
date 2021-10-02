// Required packages
const inquirer = require("inquirer");
const fs = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var teamEmployees = [];

var init = () => {
  addEmployee();
};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamRole",
        message: "What team member are you adding?",
        choices: ["Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then((choices) => {
      switch (choices.teamRole) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Inter":
          addIntern();
          break;
        case "No other employee":
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
        type: "input",
        name: "manName",
        message: "What is the team memember's name?",
      },
      {
        type: "number",
        name: "manID",
        message: "What is the team memember's ID number?",
      },
      {
        type: "input",
        name: "manEmail",
        message: "What is the team memember's email?",
      },
      {
        type: "input",
        name: "manEmail",
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
      teamEmployees.push(e);
      console.log(manager);
      addEmployee();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the team memember's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the team memember's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the team memember's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
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
      addEmployee();
    });
}

function generateHTML(teamEmployees) {
  fs.writeFileSync("./dist/index.html", createPage(teamEmployees));
}

init();
