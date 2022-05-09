// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {

    const newArr = [];

    if (arr1.length >= arr2.length) {
        var longestArr = arr1;
        var smallestArr = arr2;
    }
    else {
        var longestArr = arr2;
        var smallestArr = arr1;
    }

    // set idx for both arr to increment independently 
    var longestIDX = 0; // a
    var smallestIDX = 0; // b

    while(smallestArr[smallestIDX] || longestArr[longestIDX]){

        if (smallestArr[smallestIDX] === undefined) {
            // push the rest of the longest arr
            // does not account for duplicates in the remaining array! TODO
            console.log("----", longestArr.slice(longestIDX))
            newArr.push(...longestArr.slice(longestIDX));
            break;
        }

        if (longestArr[longestIDX] < smallestArr[smallestIDX]) {
            if (newArr[newArr.length - 1] != longestArr[longestIDX] || newArr[newArr.length - 1] === undefined) {
                newArr.push(longestArr[longestIDX])
            }
            longestIDX++;

        }
        else if (smallestArr[smallestIDX] < longestArr[longestIDX]) {
            if (newArr[newArr.length - 1] !== smallestIDX[smallestIDX] || newArr[newArr.length - 1] === undefined) {
                newArr.push(smallestArr[smallestIDX])
            }
            smallestIDX++;
        }
        else if (longestArr[longestIDX] === smallestArr[smallestIDX]) {
            if (newArr[newArr.length - 1] != longestArr[longestIDX]) {
                newArr.push(longestArr[longestIDX])
            }
            longestIDX++;
            smallestIDX++;
        }
    }
    console.log(newArr);
    return newArr;
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]