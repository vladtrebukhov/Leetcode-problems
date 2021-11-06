/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //Sorted so we must use binary search -> O(logn)
    
    //Value at start will always be larger than end if pivoted
    
    //3,4,5 
    //5,1,2 
    //5,1,2,3,4 
    //3,4,5,6,0
    //[4,5,6,7,0,1,2]
    //[11,13,15,17]
    //[2,1]
    
    
    //if start > end and mid > end, on the right
    //if start > end and mid < end, on the left
    //if start < end and mid < end, on the left
    
    let start = 0;
    let end = nums.length - 1;
    
    if (nums[start] < nums[end]) return nums[0];
    
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[start] > nums[end] && nums[mid] > nums[end]) {
            start = mid + 1;
        }
        
        if (nums[start] > nums[end] && nums[mid] < nums[end]) {
            end = mid;
        }
        
        if (nums[start] < nums[end]) {
            end = mid - 1;
        }
    }
    
    return nums[start];

};