function orderedIntersection(sortedA, sortedB) { 
    let intersect = [] // arr to return
    let indexA = 0 // initialize indices for each arr to intersect
    let indexB = 0

    while (indexA < sortedA.length && indexB < sortedB.length){ //while indices are in range
        let valA = sortedA[indexA] //values to examine from arrs
        let valB = sortedB[indexB] 

        if (valA == valB){ //if values are the same, we've found an intersect
            if (intersect[intersect.length-1] != valA){ //check for dupe
                intersect.push(valA) //push valA to intersect array if not a dupe
            }
            indexA++ //whether a dupe or not, intersect has been checked, move both indices
            indexB++
        } else if (valA < valB){ //if valA is smaller
            indexA++ //increase indexA to try to match valB
        } else { // else valB is smaller, increase indexB to see if we can match valA
            indexB++
        }
    }

    return intersect //all done!

}