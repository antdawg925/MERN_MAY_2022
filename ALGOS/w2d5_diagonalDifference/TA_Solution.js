
function diagonalDifference(sqrMatrix) { 
    //initialize two index pointers and two sums, one for each diagonal
    let a = 0;
    let b = sqrMatrix.length-1;
    let sumA = 0;
    let sumB = 0;

    for (let arr of sqrMatrix){ //step through each sub array of the matrix
        sumA += arr[a] //add values at our diagonal pointers to their respective sums
        sumB += arr[b]
        a++ //adjust pointers to next diagonal spot
        b--
    }

    return Math.abs(sumA-sumB) // return abs difference
