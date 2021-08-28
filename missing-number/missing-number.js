/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let j = 0; j <= nums.length; j++) {
        if (!nums.includes(j)) {
            return j
        }
    }
};