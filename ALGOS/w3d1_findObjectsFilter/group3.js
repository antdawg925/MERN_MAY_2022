// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    //   { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor3 = {
} //INTENTIONAL

function findObjectsFilter(searchObj, items) {
    // const keys = Object.keys(searchObj);  //keys is an array of keys
    let output = [];
    for (let item of items) {
        let isValid = true;

        for (let key in searchObj) {  //or for (let key of keys)^^^^

            if (item.hasOwnProperty(key)) {
                if (searchObj[key] === item[key]) {
                    continue;
                }
            }
            isValid = false;
            break;
        }
        if (isValid) {
            output.push(item);
        }
    }
    return output;
}


console.log(findObjectsFilter(searchFor3, items));

// console.log(findObjectsFilter(searchFor2, items));