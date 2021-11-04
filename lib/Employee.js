class Employee {
     constructor(name, id, email) {
          this.name = name;
          this.id = id;
          this.email = email;
     }

     writeName() {
          return this.name;  
     }
     writeId() {
          return this.id
     }
     writeEmail() {
          return this.email
     }
     writeRole() {
          return "Employee"
     }
}

module.exports = Employee;

const Joshua = new Employee("Joshua", 1, "jdiehl2236@gmail.com");