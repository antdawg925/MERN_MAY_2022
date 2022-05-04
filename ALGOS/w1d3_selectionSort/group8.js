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
    // declare min value
    let min;
    // first loop to loop through the index
    for (let i =0; i<arr.length-1; i++){
        //reset min to i in array
        min = i;
        // loop through array at index of i+1 so we can compare to i
        for(let j=i+1; j<arr.length; j++){
           //compare the index j and index min to determine the min
           if (arr[j] < arr[min]){
               // reset index j to min
               min = j;
            }
        }
        //compare the value of index min with the value of index i
        if (arr[min] < arr[i]){
            //swap
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(myArr));
    // declare min value
    let min;
    // first loop to loop through the index
    for (let i =0; i<arr.length-1; i++){
        //reset min to i in array
        min = i;
        // loop through array at index of i+1 so we can compare to i
        for(let j=i+1; j<arr.length; j++){
           //compare the index j and index min to determine the min
           if (arr[j] < arr[min]){
               // reset index j to min
               min = j;
            }
        }
        //compare the value of index min with the value of index i
        if (arr[min] < arr[i]){
            //swap
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(myArr));