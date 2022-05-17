const obj1 = {
    food: "Pizza",
    calories: 9001,
};

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};

obj1.__proto__ = obj2;

// console.log(obj1);


// extract keys of an object returns an array
console.log(Object.keys(obj1));

// extract values of an object returns an array
console.log(Object.values(obj1));

// extract [key, value] of an object returns an array
console.log(Object.entries(obj1));

// for (someKey in obj1) {
//     console.log(someKey);
// }

