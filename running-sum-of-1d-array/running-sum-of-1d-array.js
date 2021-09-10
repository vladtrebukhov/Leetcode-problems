/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        nums[i + 1] = nums[i + 1] + nums[i];
    }
    
    return nums;
};