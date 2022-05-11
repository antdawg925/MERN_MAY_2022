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
    let outputArr = [];
    let sum;
    //outer for loop that iterates through the whole array
    for (let i = 0; i < arr.length; i++) {
        //resets sum to our initial starting point
        sum = arr[i];
        //checks if our starting value is equal to k alone, outputs that array if so
        if (sum === k) {
            outputArr.push(arr.slice(i))
        }
        //inner for loop, iterates through the rest of the array each loop
        for (let j = i + 1; j < arr.length; j++) {
            //adds the next value in the array to the sum
            sum += arr[j];
            //checks if the sum is equal to k, outputs that array if so
            if (sum === k) {
                outputArr.push(arr.slice(i, j + 1))
            }
            //if sum is greater than k, breaks the loop if so
            if (sum > k) {
                break;
            }
        }
    }
    return outputArr;

}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,-23,11], 16));