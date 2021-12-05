/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length - 1;
    
    //[0,1,2,4,5,6,7]
    //[8,1,2,3,4]
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] >= nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    
    console.log(start, end)
    if (nums[0] < nums[nums.length - 1]) {
        end = nums.length - 1;
    } else {
        if (target >= nums[0] && target >= nums[end]) {
            start = 0;
        } else {
            end  = nums.length - 1;
        }    
    }
    
   
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return - 1;
};