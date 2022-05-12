// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have EXACTLY ONE SOLUTION,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given arr = [2, 11, 7, 15], target = 9,
// Because arr[0] + arr[2] = 2 + 7 = 9
// return [0, 2].

// example 1
// given: [2, 11, 7, 15]
// target: 9
// output: [0,2]

// example 2
// given: [3,2,4]
// target: 6
// output: [1,2]

// example 3
// given: [3,3]
// target: 6
// output: [0,1]
 
function twoSums(arr, target) {
    // Outer loop to loop through the entire array
    for (let i = 0; i < arr.length; i++) {
        // Comparison to skip over values that can't be in the solution
        if (arr[i] > target) continue;

        // Inner loop to compare and add values
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] == target) {
              // Return an array literal once the solution is found since there can only be one
            return [i, j];
          }
        }
    }
    // Return a default of an empty array if a solution isn't found
    return [];
}

function twoSums(arr, target) {
    let obj = {};
    obj[arr[0]] = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (obj.hasOwnProperty(target - arr[i])) {
        return [i, obj[target - arr[i]]];
      }
      obj[arr[i]] = i;
    }
    return [];
  }

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]
