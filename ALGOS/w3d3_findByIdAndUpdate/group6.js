// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

// check 
// someObj.hasOwnProperty("key")

// Object.keys(someObj) // returns [an array of "keys"]


const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(num, updatedVals, collection) {
    // Create output object
    let output={};
    
    for (i=0; i<collection.length; i++){
        // Collection[i] is each object
        if(collection[i].hasOwnProperty('id')){
            // Make sure object has key 'id'
            if(collection[i].id === num){
                // if ids match
                for (keys in collection[i]) {
                    // cloning object
                    output[keys]= collection[i][keys];
                }
                
                for (keys in updatedVals){
                    if(collection[i].hasOwnProperty(keys)){
                    output[keys] = updatedVals[keys];
                    }
                }
            }
            
        }
    } if(Object.keys(output).length === 0){
        return null;
    } else {
        return output;
    }
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));

// --- TEST the following: ---
// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null