const Engineer = require('../lib/Engineer');

const name = "Joshua";
const id = 7;
const email = "jdiehl2236@gmail.com";
const github = "JaynewDee";

test('Should return engineer github', () => {

     const newEng = new Engineer(name, id, email, github);
     expect(newEng.getGitHub()).toBe(github);

})

test("Should return 'Engineer'", () => {

     const newEng = new Engineer(name, id, email, github);
     expect(newEng.getRole()).toBe("Engineer");

})