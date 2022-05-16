function findObjectsFilter(searchObj, items) {
    let filtered = []  // arr to return
    for (let obj of items){ //loop over all objects in items
        let match = true // assume object matches until we know it doesn't
        for (let key in searchObj){ //for each key in our search object
            if (searchObj[key] != obj[key]){ //see if the current obj has the same value as the searchObj at that key
                match = false // if not, not a match
                break; // no need to check further keys if any key isn't a match
            }
        }
        if (match) filtered.push(obj) // if current obj is a match, push it to our return arr
    }
    return filtered
}
