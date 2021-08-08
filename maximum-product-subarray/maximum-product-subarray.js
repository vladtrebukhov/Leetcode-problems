/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    //Naive solution: sliding window from start to end, calculating each product and storing it. Once pointer reaches end, move start pointer up. Repeat until start = end. Then take the max of stored products. 
    
    //O(n) Solution
    //Loop forwards building product, checking max every time
    //Loop backwards building product, checking max every time
    //If a zero is met, reset product to 1
    //Problem dependent on even or odd number of negative integers
    //[-3, -1, -10] -> loop forwards, max -3*-1 = 3, loop backwards, max -10*-1 = 10
    //[-2,-3,-2,4] -> -2, 6, -12, -48, 4, -8, 24, -48 = 24
    
    
        let prod = 1;
        let result = Math.max(...nums);
        
        for (let i = 0; i < nums.length; i++) {
            prod = prod * nums[i];
            result = Math.max(prod, result);
            if (prod === 0) {
                prod = 1;
            }
        }
    
        prod = 1;
        
        for (let j = nums.length - 1; j >= 0; j--) {
            prod = prod * nums[j];
            result = Math.max(prod, result);
            if (prod === 0) {
                prod = 1;
            }      
        }
        
        return result;
    
};