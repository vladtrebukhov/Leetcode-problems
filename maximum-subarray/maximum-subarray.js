/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] > 0) {
            nums[i+1] = nums[i+1] + nums[i]
        }
    }
    
    return Math.max(...nums);
};