// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    const frequencyTable = {  };
    let resultArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (frequencyTable[arr1[i]] === undefined) {
                frequencyTable[arr1[i]] = 1;
                resultArr.push(arr1[i]);
            }
            i++;
        } else {
            if (frequencyTable[arr2[j]] === undefined) {
                frequencyTable[arr2[j]] = 1;
                resultArr.push(arr2[j]);
            }
            j++;
        }
    }

    while (i < arr1.length) {
        if (frequencyTable[arr1[i]] === undefined) {
            frequencyTable[arr1[i]] = 1;
            resultArr.push(arr1[i]);
        }
        i++;
    }

    while (j < arr2.length) {
        if (frequencyTable[arr2[j]] === undefined) {
            frequencyTable[arr2[j]] = 1;
            resultArr.push(arr2[j]);
        }
        j++;
    }


    return resultArr;
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) //expected: [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) //expected: [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]