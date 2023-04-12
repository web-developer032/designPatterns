// --------------------------------
// ES5
// --------------------------------
// function Subject() {
//     this.observers = [];
// }

// Subject.prototype = {
//     subscribe: function (fn) {
//         this.observers.push(fn);
//     },
//     unSubscribe: function (fnToRemove) {
//         this.observers = this.observers.filter((fn) => fn !== fnToRemove);
//     },
//     notify: function (newValue) {
//         this.observers.forEach((fn) => fn(newValue));
//     },
// };

// --------------------------------
// ES6
// --------------------------------
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }
    unSubscribe(fnToRemove) {
        this.observers = this.observers.filter((fn) => fn !== fnToRemove);
    }
    notify(newValue) {
        this.observers.forEach((fn) => fn(newValue));
    }
}

const subject = new Subject();

function observer1(value) {
    console.log("Observer One is Called!", value);
}
function observer2(value) {
    console.log("Observer Two is Called!", value);
}
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("some value");
subject.unSubscribe(observer2);
subject.notify("some value 1");
