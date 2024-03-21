class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getOccupation() {
        return this.occupation;
    }

    setOccupation(occupation) {
        this.occupation = occupation;
    }

    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`;
    }
}

// Example usage:
const person1 = new Person("John Doe", 30, "Software Engineer");
console.log(person1.toString()); // Output: Name: John Doe, Age: 30, Occupation: Software Engineer

// Update age and occupation
person1.setAge(35);
person1.setOccupation("Data Scientist");
console.log(person1.toString()); // Output: Name: John Doe, Age: 35, Occupation: Data Scientist
