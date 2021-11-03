/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    //Constraints 
    //nums length is at least one or VERY long
    //nums[i] can be between -10, 10, 0 inclusive
    
    //[2, -1, 3, 1, -2, 4, -2]
    //To find maxProduct, loop keeping track of current product and comparing it to max
    //If encounter a 0, reset your multiplier to 1 and continue (0 makes everything 0 if multiplied)
    //Since we have - #'s, we must loop backwards as well doing the same thing because the larger product could be contiguous if looking from right to left, such as the above example where we reach the maximum before the sign is flipped again to negative as we find two negatives that produce a positive
    
    if (nums.length === 1) return nums[0];
    
    let maxProduct = 0; //16
    
    let multiplier = 1; //16
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            multiplier = 1;
            continue;
        }
        
        multiplier *= nums[i];
        
        if (multiplier > maxProduct) {
            maxProduct = multiplier;
        }
    }
    
    multiplier = 1;
    
    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] === 0) {
            multiplier = 1;
            continue;
        }
        
        multiplier *= nums[j];
        
        if (multiplier > maxProduct) {
            maxProduct = multiplier;
        }
    }
    
    return maxProduct;
}