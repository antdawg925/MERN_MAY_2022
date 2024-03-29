/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;

// const arr = [10, 50, 99, 11];
/* 
left to right diagonal: 1 + 5 + 9 = 15
right to left diagonal: 3 + 5 + 9 = 17
absolute difference = 2
*/

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
absolute difference = 0
*/

function diagonalDifference(sqrMatrix) {
  let left = 0;
  let right = 0;
  let expected = 0;
  for (i=0; i<sqrMatrix.length; i++){
      left+=sqrMatrix[i][i];
      // console.log(left)
      right+=sqrMatrix[i][sqrMatrix.length-i-1]
  }expected = Math.abs(left-right);
  return expected;
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

function recursiveDiagonalDifference(sqrMatrix, i=0, left=0, right=0) {
  // Base Case
  if (i===sqrMatrix.length){
      let expected;
      expected = Math.abs(left-right);
      return expected;
  }
  left+=sqrMatrix[i][i];
  right+=sqrMatrix[i][sqrMatrix.length-i-1];

  return recursiveDiagonalDifference(sqrMatrix, ++i, left, right);
  //                                     ^ i+1 also works
}

console.log(recursiveDiagonalDifference(squareMatrix1));
console.log(recursiveDiagonalDifference(squareMatrix2));