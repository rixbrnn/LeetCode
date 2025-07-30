var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length -1;
    while(i < j){
        const middleIndex = Math.floor((j + i) / 2);
        const middle = nums[middleIndex];
        if(middle === target) {
            return middleIndex;
        }

        if(middle < target){
            if(i === middleIndex){
                return i + 1;
            }
            i = middleIndex;
        }else{
            if(j === middleIndex){
                return j + 1;
            }
            j = middleIndex;
        }
    }
    return -1;
};

searchInsert([1,3,5,6], 7);