const Employee = require("../lib/Employee");

test("Testing for correct name.", () => {
  var employeeTest = new Employee(5, "Sam", "example@name.com");
  expect(employeeTest.getName()).toBe("Sam");
  //
});



//What Henry wrote
describe(:Employee instantiation", () => {
it("should create a new Employee class",  () => {
  const obj = new Employee("Henry", 0, "example@you.com");

  expect(obj instanceof Employee).toEqual

)}