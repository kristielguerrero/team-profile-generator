const Employee = require("../lib/Employee");

test("Testing for correct name.", () => {
  var employeeTest = new Employee(5, "Sam", "example@name.com");
  expect(employeeTest.getName()).toBe("Sam");
  //
});
