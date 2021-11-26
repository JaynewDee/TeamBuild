const Intern = require('../lib/Intern');

const name = "Joshua";
const id = 7;
const email = "jdiehl2236@gmail.com";
const school = "SMU";

test('should return intern school', () => {

     const newInt = new Intern(name, id, email, school);
     expect(newInt.getSchool()).toEqual(school);

})

test("should return 'Intern'", () => {

     const newInt = new Intern(name, id, email, school);
     expect(newInt.getRole()).toEqual("Intern");

})