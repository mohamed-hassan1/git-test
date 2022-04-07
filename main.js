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
    static addNumbers(x,y) {
        return x+y
    }
    static minusNumbers(x,y) {
        return x-y
    }
    
}

class Customer extends Person {
    constructor(firstName, lastName, age, services) {
        super(firstName, lastName, age);
        this.services = services;
    }

    getServices() {
        return `my services is ${this.services}`;
    }
}

const test = new Person('Mohamed', 'Hassan', '2-25-1997');
const test2 = new Customer('Ahmed', 'Shokery', '2-25-1997', 'Doctor');

console.log(Customer.addNumbers(1,2), Customer.minusNumbers(6,3))