/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //Find start index, then find end index each with Bin search
    
    let start = 0;
    let end = nums.length - 1;
    let result = [];
    
    //Find start index
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    
    if (nums[start] !== target) return [-1,-1];
    
    result[0] = start;
    end = nums.length - 1;
    
    //Find end index
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            if (nums[mid + 1] && nums[mid+1] > nums[mid]) {
                result[1] = mid;
                return result;
            }
            start = mid + 1
        } else {
            end = mid;
        }
    }

    result[1] = end;
    return result
};