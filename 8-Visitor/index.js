// VISITOR PATTERN WORKS IN A WAY THAT IT EXTENDS THE FUNCTIONALITY OF AN OBJECT (NOT OF A CLASS)

// ---------------------------------
// CONSTRUCTOR WAY
// ---------------------------------
// function Employee(name, salary) {
//     this.name = name;
//     this.salary = salary;
// }

// Employee.prototype = {
//     getSalary: function () {
//         return this.salary;
//     },
//     setSalary: function (salary) {
//         this.salary = salary;
//     },
//     accept: function (visitorFunction) {
//         visitorFunction(this);
//     },
// };

// ---------------------------------
// CLASS WAY
// ---------------------------------
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    accept(visitorFunction) {
        visitorFunction(this);
    }
}

const devSage = new Employee("DevSage", 10000);
console.log(devSage.getSalary());

function extendSalary(employee) {
    employee.setSalary(employee.getSalary() * 1.5);
}
devSage.accept(extendSalary);
console.log(devSage.getSalary());
