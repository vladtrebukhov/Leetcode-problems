/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   const majority = nums.length / 2;
    
    //{3:1}
    
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
    }
    
    const keys = Object.keys(map);
    
    for (let i = 0; i < keys.length; i++) {
        if (map[keys[i]] > majority) return keys[i]
    }
};