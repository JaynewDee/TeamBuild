class Employee {
     constructor(name, id, email) {
          this.name = name;
          this.id = id;
          this.email = email;
     }

     writeName() {
          return console.log(this.name);  
     }

     writeId() {
          return console.log(this.id)
     }

     writeEmail() {
          return console.log(this.email)
     }

     writeRole() {
          return console.log(this)
     }
}

const Joshua = new Employee("Joshua", 1, "jdiehl2236@gmail.com");

Joshua.writeRole();
// Employee.writeName();
// Employee.writeId();
// Employee.writeRole();