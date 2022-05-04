/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){
    let minIndex = 0;
    let currIndex = 0;
    // currIndex goes 1 by 1 until it reaches the end
    while( currIndex < arr.length){
        // standard for Loop
        for(let i = currIndex; i < arr.length; i++) {
            // conditional check to see if our current index value is less than value of the minimum index
            if(arr[i] < arr[minIndex]){
                // if true, minIndex changes to currently tested index (i)
                minIndex = i;
            }
        }
        // Through destructuring we're swaping both values at the same time
        [arr[currIndex], arr[minIndex]] = [arr[minIndex], arr[currIndex]];
        // Moves to the next position so we dont repeate our previously check position
        currIndex += 1;
        // We're resetting our current index to minIndex
        minIndex = currIndex;
    }
    // return the newly assorted array
    return arr;
}
console.log(selectionSort(myArr));
console.log(selectionSort(numsOrdered));
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));