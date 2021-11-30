/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for (let i = 0; i < nums.length; i++) {
        let index = i;
        
        if (nums[i+1] !== undefined && nums[i] > nums[i+1]) {
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
        }
        
        while (nums[index-1] !== undefined && nums[index] < nums[index-1]) {
            [nums[index], nums[index-1]] = [nums[index-1], nums[index]];
            index--;
        }
    }
};