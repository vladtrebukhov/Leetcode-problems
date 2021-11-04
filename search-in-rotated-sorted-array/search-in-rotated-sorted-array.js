/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0
    let end = nums.length - 1;
    let first = nums[0];
    let last = nums[nums.length - 1];
    
    //[1,2,3,4,5]
    //[4,5,6,7,0,1,2]
    
    while (start < end) {
        
        let mid = Math.floor((start + end) / 2)
        
        if (nums[mid] === target) return mid;
        
        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
      
    }
    
    return nums[start] === target ? start : -1
};