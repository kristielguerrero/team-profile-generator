const Manager = require("../lib/Manager");

test("Testing for correct name.", () => {
  var managerTest = new Manager(9, "Susie", "example@name.com");
  expect(managerTest.getName()).toBe("Susie");
  //
});
