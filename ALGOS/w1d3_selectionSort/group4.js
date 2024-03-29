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
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9]

function selectionSort(arr){ 
    for (let i=0; i<arr.length; i++){
        // console.log(arr[i]);
        let minIdx = i
        for (let j=i+1; j<arr.length;j++){
            // console.log(arr[j]);
            
            // console.log("starting" + minVal);
            if (arr[j]<arr[minIdx]){
               minIdx = j    
            }
        }
        // after inner for loop
        // j has completely went through all values
        // swap with current index at i
        temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp

    }
    return arr
}

console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));