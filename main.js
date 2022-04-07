class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getAge() {
        return new Date(Date.now() - new Date(this.age).getTime()).getUTCFullYear() - 1970
    }
    getFullName() {
        return `my name is ${this.firstName} ${this.lastName}`;
    }
}

const test = new Person('Mohamed', 'Hassan', '2-25-1997');

console.log(test.getFullName())