const Intern = require("../lib/Intern");

test("Testing for correct name.", () => {
  var internTest = new Intern(1, "Lola", "example@name.com");
  expect(internTest.getName()).toBe("Lola");
  //
});
