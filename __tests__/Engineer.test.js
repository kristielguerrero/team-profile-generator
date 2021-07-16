const Engineer = require("../lib/Engineer");

test("Testing for correct name.", () => {
  var engineerTest = new Engineer(3, "Chris", "example@name.com");
  expect(engineerTest.getName()).toBe("Chris");
});
