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
  let index1 = 0;
  let index2 = 0;
  let outputArr = []
  // walks through the whole array and not exceed the array lengths
  while(index1 + index2 < sortedA.length + sortedB.length) {
      // checks to see if the values are the same and if outputArr doesnt already have it
      if(sortedA[index1] == sortedB[index2] && (outputArr[outputArr.length - 1] != sortedA[index1])) {
          // if its not a duplicate it will push the value and increment both our indexs
          outputArr.push(sortedA[index1]);
          index1++;
          index2++;
      // fires if 1st value is lower than the 2nd value and increments
      } else if (sortedA[index1] < sortedB[index2]) {
              index1++;
      // fires if the 2nd value is lower than the 1st value and increments
      } else if(sortedB[index2] < sortedA[index1]) {
          index2++;
      // fires if they are the same value and already has the output and increments
      } else {
          index1++;
          index2++;
      }
  } 
  return outputArr
}

console.log(orderedIntersection(arrA1, arrB1));

