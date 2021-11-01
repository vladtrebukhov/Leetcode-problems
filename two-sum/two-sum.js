/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (!(complement in map)) {
            map[nums[i]] = i;
        } else {
            return [map[complement], i];
        }
    }
};