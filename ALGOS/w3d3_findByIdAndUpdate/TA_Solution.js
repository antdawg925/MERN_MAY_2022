function findByIdAndUpdate(id, updatedVals, collection) { 
    let found = false; //this bool will keep track of whether we find a matching object to our search id
    let index = 0 //here we will store the index of our found object

    for (let i = 0; i < collection.length; i++){ //iterate through collection
        let item = collection[i] // item from collection to consider
        if (item.id == id){ // if current item's id is the one we're looking for
            found = true; // set found to true
            index = i; // store the index of this object
            break; // break, no need to search further
        }
    }

    if (found){ // if we have a match
        let updating = collection[index] //our match!
        for (let key in updatedVals){ //iterate through updatedVals obj
            if (updating.hasOwnProperty(key)){ // if the object we're updating has the same key as updatedVals
                updating[key] = updatedVals[key] // update its value to the value in our updatedVals obj
            }
        }
    }
    
    return found ? collection[index] : null; // did we find a match? Return the updated match if so. If not, return null.
}
