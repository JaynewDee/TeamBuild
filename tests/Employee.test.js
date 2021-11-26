const Employee = require('../lib/Employee');

const name = "Joshua";
const id = 7;
const email = "jdiehl2236@gmail.com";


test('Should return employee name', () => {

     const newEmployee = new Employee(name, id, email);
     expect(newEmployee.getName()).toEqual(name);

})


test('Should return employee ID', () => {

     const newEmployee = new Employee(name, id, email);
     expect(newEmployee.getId()).toEqual(id);

})

test('Should return employee email', () => {

     const newEmployee = new Employee(name, id, email);
     expect(newEmployee.getEmail()).toEqual(email);

})

test("Should return 'Employee'", () => {

     const newEmployee = new Employee(name, id, email);
     expect(newEmployee.getRole()).toEqual("Employee");

})
