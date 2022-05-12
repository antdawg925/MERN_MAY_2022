function twoSums(arr, target) {
    let seen = {} //hash map object will allow O(1) look up time of already seen values. 
    // we will store KVPs with the key being the value from the array, and the value being its index 
    
    for (let i = 0; i < arr.length; i++){ //loop through the array
        let currentValue = arr[i]; // initialize current value to consider
        let delta = target - currentValue; // let delta be the value needed to reach target with currentValue
        if (seen.hasOwnProperty(delta)){ // if delta exists in our hash map ( O(1) look up time)
            return [seen[delta], i] // return an array containing the two indices
        }
        seen[currentValue] = i; // otherwise, add current value and its index as a KVP to our seen object
    }
}
