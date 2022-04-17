function nameIterator(names) {
    let nameIndex = 0;

    return {
        next: function() {
            return nameIndex < names.length ?
            {value: names[nameIndex++], done: false} :
            {done: true}
        }
    }

}

const arr = ['Mohamed', 'Hassan', 'Ahmed'];

const nameFun = nameIterator(arr);

console.log(nameFun.next().value);
console.log(nameFun.next().value);
console.log(nameFun.next().value);
console.log(nameFun.next().value);