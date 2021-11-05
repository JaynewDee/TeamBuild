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