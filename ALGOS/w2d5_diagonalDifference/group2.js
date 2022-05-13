/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3], // arr[0][0],    arr[0][arr.length - 1]
    [4, 5, 6], // arr[1][1],    arr[1][1]
    [9, 8, 9], // arr[2][2],    arr[2][0]
];
const expected1 = 2;
//             0           1       2
const arr = [[10,20,30],   50,    99,    11];
//         arr[0][0]  arr[0][1]
//       arr[0]   arr[1]  arr[2]   arr[3]


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
  for(i = 0; i < sqrMatrix[0].length; i++){                   // For loop the length of the array
      left += sqrMatrix[i][i];                                // Add values diagonaly from top left to bottom right
      right += sqrMatrix[i][sqrMatrix[0].length - 1 - i];     // Top right to bottem left (oposite diagonal)
  }
  return Math.abs(left - right);                              // Returns the abosolute value (a postive value/ positive stays positive)
}
// console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));