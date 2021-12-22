/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
//    Must contain numbers between 1 and length of array (inclusive)
//     If duplicate exists, one number between 1 and length must be missing
//     If duplicate exists, nums[first_index] !== nums[current_index]
    
//     O(n^2), indexOf is O(n)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.indexOf(nums[i]) !== i) return nums[i];
//     }
    
//     O(nlogn), because sort
//     nums.sort((a-b) => a - b);
    
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] === nums[i]) return nums[i];
//     }
    
//     O(n), extra space for map
//     let map = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in map) return nums[i];
//         map[nums[i]] = i;
//     }
    
//     O(n), constant space
//     Since each number in nums is within nums.length and all nums are positive
//     Loop and each value at index use as index of array to swap value to negative num
//     If value is already negative return the value (we've found an already flipped num)
    
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]);
        if (nums[index] < 0) return Math.abs(nums[i]);
        nums[index] = -Math.abs(nums[index]);
    }
};
