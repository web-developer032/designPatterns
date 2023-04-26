function Person(name, gender, height, weight) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

function PersonBuiler(name, gender) {
    this.name = name;
    this.gender = gender;

    this.setWeight = (weight) => {
        this.weight = weight;
        return this;
    };
    this.setHeight = (height) => {
        this.height = height;
        return this;
    };
    this.build = () => {
        return new Person(this.name, this.gender, this.height, this.weight);
    };
}

const me = new PersonBuiler("Mubasher", "Male").setWeight(84.5).setHeight(5.11).build();
console.log(me);
