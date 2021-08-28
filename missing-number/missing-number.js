/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set();
    
    for (let num of nums) {
        set.add(num);
    };
    
    
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) return i
    }
};