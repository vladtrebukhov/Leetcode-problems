/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.slice(0,i).concat(nums.slice(i+1)).indexOf(nums[i]) === -1) return nums[i];
    };
};