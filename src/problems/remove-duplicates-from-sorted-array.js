var removeDuplicates = function(nums) {

    let currentNumber = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === currentNumber){
            nums[i] = null;
        }else{
            currentNumber = nums[i]
        }
    }

    let firstEmptyIndex = null;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === null){
           if(firstEmptyIndex === null){
                firstEmptyIndex = i;
           }
        }else if (firstEmptyIndex !== null){
            nums[firstEmptyIndex] = nums[i];
            nums[i] = null;
            firstEmptyIndex++;
        }
    }
    return firstEmptyIndex ? firstEmptyIndex -1 : 0;

};

removeDuplicates([1,1,2,2,3,4,5,6,6,7])