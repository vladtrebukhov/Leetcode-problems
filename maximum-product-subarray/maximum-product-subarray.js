/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    //[2, 3, -2, 0, -4, -5, -7]
    
    if (nums.length === 1) return nums[0];
    
    let maxProduct = nums[0];
    let prod = 1;
    
    for (let i = 0; i < nums.length; i++) {
        prod *= nums[i];
        
        maxProduct = Math.max(maxProduct, prod);
        
        if (nums[i] === 0) {
            prod = 1;
        }
    }
    
    prod = 1;
    
    for (let j = nums.length - 1; j >= 0; j--) {
        prod *= nums[j];
        
        maxProduct = Math.max(maxProduct, prod);
        
        if (nums[j] === 0) {
            prod = 1;
        }
    }
    
    return maxProduct;
};