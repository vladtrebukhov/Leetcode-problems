/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
//     Must contain numbers between 1 and length of array (inclusive)
//     If duplicate exists, one number between 1 and length must be missing
//     If duplicate exists, nums[first_index] !== nums[current_index]
        
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.indexOf(nums[i]) !== i) return nums[i];
//     }
    
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) return nums[i];
        map[nums[i]] = i;
    }
};
