
class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

}

// const me = new Person('Susheel Sharma', 30);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

// const stu1 = new Student('Jayant', 25, 'Computer Science');
// console.log(stu1.getDescription());

// const stu2 = new Student('Sumit', 26);
// console.log(stu2.getDescription());

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const traveller1 = new Traveller('George', 55, 'Ohio');
console.log(traveller1);
console.log(traveller1.getGreeting());