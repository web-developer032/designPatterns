const items = [1, "string", false, 1.24];

// --------------------------------
// ES5
// --------------------------------
// function Iterator(items) {
//     this.items = items;
//     this.index = 0;
// }

// Iterator.prototype = {
//     hasNext: function () {
//         return this.index < this.items.length;
//     },
//     hasPrevious: function () {
//         return this.index > 0;
//     },
//     current: function () {
//         return this.items[this.index];
//     },
//     next: function () {
//         return this.items[++this.index];
//     },
//     previous: function () {
//         return this.items[--this.index];
//     },
// };

// --------------------------------
// ES6
// --------------------------------
class Iterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.items.length;
    }
    hasPrevious() {
        return this.index > 0;
    }
    current() {
        return this.items[this.index];
    }
    next() {
        return this.items[++this.index];
    }
    previous() {
        return this.items[--this.index];
    }
}

const newItr = new Iterator(items);

console.log(newItr.next());
console.log(newItr.next());
console.log(newItr.current());
console.log(newItr.next());
console.log(newItr.previous());
console.log(newItr.next());
