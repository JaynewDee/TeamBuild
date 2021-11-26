const Manager = require('../lib/Manager');

const name = "Joshua";
const id = 7;
const email = "jdiehl2236@gmail.com";
const officeNum = 56;

test('should return manager office number', () => {

     const newManager = new Manager(name, id, email, officeNum);
     expect(newManager.getOfficeNum()).toEqual(officeNum);

})

test("Should return 'Manager'", () => {

     const newManager = new Manager(name, id, email, officeNum);
     expect(newManager.getRole()).toEqual("Manager");

})