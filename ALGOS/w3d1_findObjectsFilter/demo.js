// {OBJECTS}
var animals = ["lion", "zebra", "elephant", "giraffe"];

// 1
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }
// // 2
// animals.map((animal, idx) => {
//     console.log(animal)
// });
// animals.forEach((animal) => console.log(animal));
// // 3
// for (thingy of animals) {
//     console.log(thingy);
// }

// ---------------
let message = "hello";
// message[0] = "H"; // ❌❌❌ cannot do in strings


// ----- OBJECTS --------
const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: true,
}

// loop over an object
for (someKey in doggo) {
    //          key             value
    console.log(someKey, doggo[someKey]);
}
// 
const doggoKeys = Object.keys(doggo) // return an array with all the keys in the doggo obj
console.log(doggoKeys);

const doggoValues = Object.values(doggo) // returns an array with all the VALUES in the doggo obj
console.log(doggoValues);

const doggoEntries = Object.entries(doggo) // returns a 2d array of key-value pairs
console.log(doggoEntries);

// check if a key exists in the Obj
// array[0]
// O(1)
doggo.hasOwnProperty("favFood") // return T / F if a key exists
console.log(doggo.hasOwnProperty("asdasdasd") );