/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== i) return nums[i]
    }
};