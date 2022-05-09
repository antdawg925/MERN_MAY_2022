// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];

function mergeDedupe(arr1, arr2) {
  let arr1Pointer = 0,
    arr2Pointer = 0,
    output = [];

  while (arr1Pointer != arr1.length || arr2Pointer != arr2.length) {
    // Compares is value of both and adds the first one and increments both
    if (arr1[arr1Pointer] == arr2[arr2Pointer]) {
      output.push(arr1[arr1Pointer]);
      arr1Pointer++, arr2Pointer++;
      continue;
    }
    // If value of the first array is equal to the last value in output increment and continue
    if (arr1[arr1Pointer] == output[output.length - 1]) {
      arr1Pointer++;
      continue;
    }
    // If value of the second array is equal to the last value in output increment and continue
    if (arr2[arr2Pointer] == output[output.length - 1]) {
      arr2Pointer++;
      continue;
    }

    // Compare the values of each array at the pointer and adds what is less than the other or what is left
    if (arr1Pointer == arr1.length || arr1[arr1Pointer] > arr2[arr2Pointer]) {
      output.push(arr2[arr2Pointer]);
      arr2Pointer++;
    } else {
      output.push(arr1[arr1Pointer]);
      arr1Pointer++;
    }
  }

  return output;
}

// try out some other tests
console.log(mergeDedupe(arrB, arrA)); //expected: [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6])); //expected: [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a ->
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]
