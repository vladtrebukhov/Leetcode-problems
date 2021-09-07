/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum_nums = nums.reduce((acc, curr) => acc + curr, 0);
    
    if (sum_nums < target) return 0;
    
    let left = 0;
    let right = 0;
    let min = nums.length;
    let count = nums[0];
    
    while (right < nums.length) {
        if (count >= target) {
            
            if (right - left + 1 === 1) {
                return 1;
            }
            
            min = Math.min(min, right - left + 1);
            count -= nums[left];
            left++;
            
        } else {
            right++;
            count += nums[right];
        }
    };
    
    return min;
};