// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let output = []
    let leftIdx = 0
    let rightIdx = 0

    for (let i = 0;i<arr1.length+arr2.length;i++) {
        if(arr1[leftIdx]>arr2[rightIdx]){
            if(!output.includes(arr2[rightIdx])){
                output.push(arr2[rightIdx])
            }
            rightIdx++
        }
        else if(arr1[leftIdx]<arr2[rightIdx]){
            if(!output.includes(arr1[leftIdx])){                
                output.push(arr1[leftIdx])
            }
            leftIdx++
        }
        else{
            if(!output.includes(arr1[leftIdx])){
                output.push(arr1[leftIdx])
            }
            rightIdx++
            leftIdx++
            i++
        }
    }
}           
            
// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) //expected: [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) //expected: [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]