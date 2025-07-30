/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let availableSpotIndex = null
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            if(availableSpotIndex === null) {
                availableSpotIndex = i;
            }
            nums[i] = null;
        }
        else if(availableSpotIndex !== null){
            nums[availableSpotIndex] = nums[i];
            nums[i] = null;
            availableSpotIndex++;
        }
    }
    return availableSpotIndex !== null ? availableSpotIndex : nums.length;
};

removeElement([0,1,2,2,3,0,4,2], 2);