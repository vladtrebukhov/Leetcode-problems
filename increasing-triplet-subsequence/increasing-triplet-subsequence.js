/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    if (nums.length < 3) return false;
    
    let maxVal = Math.max(...nums);
    let i = maxVal;
    let j = maxVal;
    let k = maxVal;
    
    //[0,4,2,1,0,-1,-3] -> 0,1,4
    
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] <= i) {
            i = nums[x]
        } else if (nums[x] <= j) {
            j = nums[x];
        } else {
            return true;
        }
    }
    
    return false;
};  
