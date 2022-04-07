function Person(name, dob) {
    this.name = name;
    this.age = function () {
        return new Date(Date.now() - new Date(dob).getTime()).getUTCFullYear() - 1970
    }
}

Person.prototype.getFullName = function() {
    return `${this.name} Hassan`;
}

const test = new Person('Mohamed', '3-15-1980');

console.log(test.getFullName())