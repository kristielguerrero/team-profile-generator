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
          addManager;
      }
    });
}

function addEmployee() {
  inquirer.prompt(add);
}
