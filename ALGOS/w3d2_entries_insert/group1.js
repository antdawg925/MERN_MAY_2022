/* 
Recreate Object.entries() method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/
// pseudo code
// 1. loop over obj
// 2. get the keys and values from obj
// 3. 

const obj1 = {
  name: "Pizza",
  calories: 9001,
};
const expected1 = [
  ["name", "Pizza"],
  ["calories", 9001],
];

const obj2 = {
  firstName: "Foo",
  lastName: "Bar",
  age: 13,
};
const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];

// obj1.__proto__ = obj2;

function entries(obj) {
  let resultArr = [];                         // Array to store the return
  for(let key in obj){                        // Looping over keys in object
      if( obj. hasOwnProperty(key)) {         // Checking if the original obj has the key, ensures that we dont have inherited key value pairs
          resultArr.push(key,obj[key])        // Pushes the key and that value at that key into the resultArr
      }
  }
  return resultArr
}

console.log(entries(obj1));
console.log(entries(obj2));

// ==================================================

/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key)
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

function insert(tableName, columnValuePairs) { }

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));