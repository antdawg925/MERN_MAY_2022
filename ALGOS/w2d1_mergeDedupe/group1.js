// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) { 
    let i = 0;
    let j = 0;
    let mergedArr = [];
    let arrLen = arr1.length + arr2.length;
    while (i + j < arrLen) {
        if (arr1[i] < arr2[j]) {
            // if(mergedArr[mergedArr.length -1] != arr[i]) avoids another loop
            if (mergedArr.includes(arr1[i])){
            }
            else if (arr1[i] != undefined){
                mergedArr.push(arr1[i]);
            }
            i++;
        }
        else {
            if (mergedArr.includes(arr2[j])) {
            }
            else if (arr2[j] != undefined){
                mergedArr.push(arr2[j]);
            }
            j++;
        }
    }
    return mergedArr;
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) //expected: [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) //expected: [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]