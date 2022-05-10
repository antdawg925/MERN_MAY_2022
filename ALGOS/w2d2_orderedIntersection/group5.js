/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

 function orderedIntersection(sortedA, sortedB) {
  let result = [], arr1p = 0, arr2p = 0;
  // While both pointers aren't equal to the length of that array
  while (arr1p!=sortedA.length && arr2p!=sortedB.length){
      // If the value of each pointer in the arrays is equal...
      if (sortedA[arr1p] === sortedB[arr2p]){
          // If the value isn't already in the output, add it
          if(sortedA[arr1p] !== result[result.length-1]){
              result.push(sortedA[arr1p]);             
          }
          // Regardless, increment both pointers
          arr1p++, arr2p++;
      }
      // If the second value of the pointer is less than the first value then increment the second pointer
      else if(sortedA[arr1p] > sortedB[arr2p]){
          arr2p++;
      }
      // Otherwise increment the first pointer
      else{
          arr1p++;
      }

  }
  // Give back the fruits of our labour
  return result;
}