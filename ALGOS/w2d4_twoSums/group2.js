/*https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the
two numbers such that they add up to a specific target.

You may assume that each input would have EXACTLY ONE SOLUTION,
and you may not use the same element twice.

the array is unsorted, contains no floats, and there may be duplicate values

Given arr = [2, 11, 7, 15], target = 9,
Because arr[0] + arr[2] = 2 + 7 = 9
return [0, 2].

example 1
given: [2, 11, 7, 15]
target: 9
output: [0,2]

example 2
given: [3,2,4]
target: 6
output: [1,2]

example 3
given: [3,3]
target: 6
output: [0,1]
*/

function twoSums(arr, target) {
    // create variable for output
    let output=[];

    // iterate through array
    for(let i=0; i<arr.length; i++){
        // iterate through array checking value next to i;
        for(let j=i+1; j<arr.length; j++){
            // check if value at 'i' plus the value at 'j' equals the target value
            if(arr[i] + arr[j] === target){
            // push the indeces to the output if the sum equals the target
                output.push(i);
                output.push(j);
            }

        }
    } return output;
}

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]

function twoSums2(arr, target) {
    let output=[]
    let i=0;
    let j=1;

    while(i<arr.length || j<arr.length){
        
        if(arr[i] + arr[j] === target){
            // push the indeces to the output if the sum equals the target
                output.push(i);
                output.push(j);
                break;
                
                
            } if(j===arr.length-1){
            i++;
            j=i;
            }
            j++;
            
    } return output;

}
console.log(twoSums2([2, 11, 15, 7], 9)); // [0,2]
console.log(twoSums2([3, 2, 4], 6)); // [1,2]
console.log(twoSums2([3, 3], 6)); // [0,1]