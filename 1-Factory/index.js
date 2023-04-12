// ------------------
// ES5 WAY
// ------------------
// function Developer(name) {
// this.name = name;
// this.type= "developer";
// }

// function Tester(name) {
// this.name = name;
// this.type= "tester";
// }

// function Employee() {
//     this.create = (name, type) => {
//         switch (type) {
//             case 1:
//                 return new Developer(name);
//             case 2:
//                 return new Tester(name);

//             default:
//                 break;
//         }
//     };
// }

// ------------------
// ES6 WAY
// ------------------
class Developer {
    constructor(name) {
        this.name = name;
        this.type = "developer";
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.type = "tester";
    }
}

class Employee {
    create(name, type) {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);

            default:
                break;
        }
    }
}

let interviewes = [
    {
        name: "Mubahser",
        type: 1,
    },
    {
        name: "Hamza",
        type: 1,
    },
    {
        name: "Qasim",
        type: 2,
    },
    {
        name: "Yacir",
        type: 1,
    },
    {
        name: "Adeeb",
        type: 2,
    },
];

let employees = [];
interviewes.forEach((interviewe) => {
    let employeeCreater = new Employee();
    employees.push(employeeCreater.create(interviewe.name, interviewe.type));
});

function say() {
    console.log(`Hi, my name is ${this.name} and I am ${this.type}`);
}

employees.forEach((employee) => say.call(employee));
