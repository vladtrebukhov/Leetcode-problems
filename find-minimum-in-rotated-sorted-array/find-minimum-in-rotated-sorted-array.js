/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //[0, 1]
    //[1, 0]
    //[7,0,1]
    //[3,5,6,0,1,2]
    //[0,1,2,4,5,6,7]
    //[4,5,6,0]
    //[1,2,3,4,5]
    //[0, 0, 0]
    //[3, 4, 5, 1, 2]
    //[4,5,6,7,0,1,2]
    //[5,1,2,3,4]
    
    //if mid is less than mid - 1, we found the pivot thus the smallest value is at mid
    //if start < end, decrement end 
    //if start > end, increment start
    //
    
    if (nums.length === 1 || nums[0] <= nums[nums.length - 1]) return nums[0]
    
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        
        if (nums[start] > nums[end]) {
            start++;
        }
        
        if (nums[start] < nums[end]) {
            end--;
        } 
    }
};