// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) { 
    const resultsArr = [];
                                                    
    for (let i = 0; i < arr.length; i++){           // standard for loop that loops through entire array
        let sum = 0;                                //initialize sum to 0
        let tempArray = [];                         //initialize an empty array to store 2d array
        for(let j = i; j < arr.length; j++) {       // second iteration to compare with sum
            sum += arr[j];                          // add the current value of index j to sum
            tempArray.push(arr[j])                  // push the current value of index j to sum
            if (sum > k) {                          // optimize by not reading iteration if sum exceeds given input
                break;
            }
            if (sum === k) {                        //conditional to compare sum with the given input
                resultsArr.push(tempArray); 
                let z = j + 1;                      // initialize z as the next iteration of j
                const zeroTemp = [...tempArray]     // create variable initialized to a copy of tempArray
                while (arr[z] === 0) { 
                    zeroTemp.push(arr[z]);          // add the iteration of z to the copy of tempArray
                    resultsArr.push([...zeroTemp]); // immediately push the copy into the resultsArr
                    z++;
                }
                break;
            }
        }
    }
    return resultsArr
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));