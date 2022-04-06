function Person(name, dob) {
    this.name = name;
    this.age = function() {
        return new Date(Date.now() - new Date(dob).getTime()).getUTCFullYear() - 1970
    }
}

const test = new Person('Mohamed', '3-15-1980');

console.log(test.age())