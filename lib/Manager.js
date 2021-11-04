const Employee = require('./Employee')

class Manager extends Employee {
     constructor(name, id, email, officeNumber) {
          super(name, id, email);
          this.officeNumber = officeNumber;
     }

     writeRole() {
          return 'Manager';
     }
}

const James = new Manager('James Schell', 2, 'james@yahoo.com', 245);
console.log(James.writeName());