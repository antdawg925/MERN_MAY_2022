function selectionSort(nums) {
    let sorted = 0; //keeps track of how many items have been selected and moved to front
    let mindex = 0 //keeps track of index of minimum value for portion of array we are searching/sorting
    while(sorted < nums.length -1 ){ //while the whole list isn't yet sorted, stop at 1 less because last element implicitly sorted
        for (let i=sorted+1; i < nums.length; i++){  //iterate through the array, starting at the first unsorted index
            mindex = nums[i] < nums[mindex] ? i : mindex; //if the value at the current index is lower than our current minimum index, update mindex
        }
        if (nums[sorted] != nums[mindex]){ //if the values are the same, no need to swap
            [nums[sorted], nums[mindex]] = [nums[mindex], nums[sorted]] //perform swap of min value to front of array (next unsorted position)
        }
        sorted++ // we've sorted one, increase sorted count
        mindex = sorted //initialze minimum index to the first value in the rest of the array to be sorted

    }
    return nums

}