/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (!(complement in numsMap)) {
            numsMap[nums[i]] = i;
        } else {
            return [i, numsMap[complement]]
        }
    }
};