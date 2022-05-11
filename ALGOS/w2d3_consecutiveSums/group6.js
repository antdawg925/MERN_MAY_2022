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

function findConsecutiveSums(arr, target) {
    let output = [];
    
    // Outer loop to go through the entirety of the array
    for (let outer = 0; outer < arr.length; outer++) {
      // Declaring a tempArray and a sum in the outer loop to reset on each outer iteration
      let tempArr = [],
        sum = 0;

      // Inner loop to loop through the rest of the array starting from outer
      for (let inner = outer; inner < arr.length; inner++) {
        // If this value plus the sum is greater than the target then exit the loop
        if (sum + arr[inner] > target) break;
        // If the value plus the sum is the equal to the target then make a copy of the tempArray and add it to output
        // (In order to input all instances of zeros)
        else if (sum == target) output.push([...tempArr]);
        
        // Add value to the temp array and increment sum
        tempArr.push(arr[inner]);
        sum += arr[inner];
      }
      // Add the tempArray to output if the sum is equal to the target
      // (For the last value)
      if (sum == target) output.push(tempArr);
    }
    return output;
  }
  
  console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));
  