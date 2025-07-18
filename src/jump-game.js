    function canJump(nums) {
        if(nums.length === 1) {
            return true;
        }

        for(let i = 0; i < nums.length; ) {
            console.log("Current index: " + i);
            const maxDistanceFromCurrentSpot = nums[i];
            if(maxDistanceFromCurrentSpot === 0){
                return false;
            }

            if(i + maxDistanceFromCurrentSpot +1 >= nums.length){
                return true;
            }

        
            let bestNextSpotIndex = i;
            let bestNextSpotDistance = nums[i];

            let rangeStart = i + 1;
            let rangeLimit =  i + maxDistanceFromCurrentSpot;

            console.log("analyzing range from " + rangeStart + " to " + rangeLimit);

            for(let j = rangeStart; j <= rangeLimit; j++){

                const hasReachedEnd = nums[j] === null || nums[j] === undefined;
                if(hasReachedEnd){
                    return true;
                }

                const canJumpAtLeastOnce = nums[j] > 0;
                if(!canJumpAtLeastOnce){
                    continue;
                }

                const distanceFromCurrentSpot = nums[j] + j;
                if(distanceFromCurrentSpot >= bestNextSpotDistance){
                    bestNextSpotIndex = j;
                    bestNextSpotDistance = distanceFromCurrentSpot;
                }

            }

            // need to at least advance one from there
            if(bestNextSpotDistance < 1){
                return false
            }

            if(bestNextSpotIndex === i) {
                i++;
            } else{
                const howMuchToAdvance = bestNextSpotIndex - i;
                i = i + howMuchToAdvance;
                console.log("Advancing to " + i);
            }
        }
    };

console.log(canJump([4,2,0,0,1,1,4,4,4,0,4,0]));
//console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]))
//console.log(canJump([1,1,2,2,0,1,1]));

// console.log(canJump([3,0,8,2,0,0,1]));

// console.log(canJump([2,0, 0]));

// console.log(canJump([2,3,1,1,4]));

// console.log(canJump([3,2,1,0,4]));