function findConsecutiveSums(arr, k) { //my first pass, lots of built ins
    let left = 0; //initialize left and right indices for slicing
    let right = 1;
    let returnArr = [] // arr to return
    while (right < arr.length + 1) { // while right is less than one more than length
        // plus one because we will be slicing, and slice is exclusive of second index provided
        let slice = arr.slice(left, right) //get the portion of the array we're looking at
        let sum = slice.reduce((a, b) => a + b) //sum its parts using reduce
        if (sum == k) { //if we found our target sum
            returnArr.push(slice) //push the slice into our return array
            right++ //increase right index, if next element is 0, it will be another solution
        } else if (sum > k) { //if we're over our sum, move left up one and reset right to one more than left
            left++
            right = left + 1
        } else if (sum < k) { // if we're under our sum, add another element to this slice
            right++
        }
    }
    return returnArr
}

function findConsecutiveSums2(arr, k) {
    let returnArr = [] //arr to return

    //main outer loop
    for (let i = 0; i < arr.length; i++) { //iterate through array
        let sum = arr[i] //initialize a sum starting at this i position

        //inner loop 
        for (let j = i + 1; j < arr.length + 1; j++) { // go through the rest off the array
            if (sum > k) { //if sum has passed k, we can stop looking / adding elements and move up i
                break //remove this check if inputs include negative numbers
            }
            if (sum == k) { // hit target, push this slice
                returnArr.push(arr.slice(i, j))
            }
            sum += arr[j] // add next element if we haven't reached target or passed it
        }
    }
    return returnArr
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11, 16], 16));
console.log(findConsecutiveSums2([2, 5, 3, 6, 7, 0, 0, 23, 11, 16], 16));