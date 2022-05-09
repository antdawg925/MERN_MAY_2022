function mergeDedupe(arr1, arr2) {
    let merged = [] //array to return
    let indexOne = 0 // initialize two indices, one for each array
    let indexTwo = 0
    while (indexOne < arr1.length && indexTwo < arr2.length) { //while both indices are within their respective arrays
        let one = arr1[indexOne] //get the values from each arr at their respective indices
        let two = arr2[indexTwo]
        if (one == two) { //if they're equal
            if (merged[merged.length - 1] != one) { //see if the item exists already in our array (should be last item since we're using sorted arrs)
                merged.push(one) //if it doesn't, push this value
            }
            indexOne++ //regardless, move both indices forward
            indexTwo++
        } else if (one < two) { // if one is smaller, only check and potentially push one
            if (merged[merged.length - 1] !== one) {
                merged.push(one)
            }
            indexOne++ //regarless, move index one up
        } else if (merged[merged.length - 1] !== two) { // else if two smaller, check for dupes then push
            merged.push(two)
            indexTwo++
        } else {
            indexTwo++ //increase indexTwo if it the value didn't get pushed
        }
    }
    
    while (indexOne < arr1.length){  //collect the rest of arr 1 if arr 2 ran out
        let one = arr1[indexOne]
        if (merged[merged.length - 1] != one) { // still checking for dupes
            merged.push(one)
        }
        indexOne++

    }

    while (indexTwo < arr2.length){ // collect the rest of arr 2 if arr 1 ran out
        let two = arr2[indexTwo]
        if (merged[merged.length - 1] != two) { // still checking for dupes
            merged.push(two)
        }
        indexTwo++

    }
    return merged

}