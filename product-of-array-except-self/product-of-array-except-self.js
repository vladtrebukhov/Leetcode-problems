/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //Nums.length >= 2
    //Nums can be positive or negative from -30 to 30
    //O(n) solution needed, can't use division 
    //Loop forwards storing multiplier of everything to left
    //Loop backwards storing multiplier to right
    //Reverse right arr -> loop one more time and multiply left * right at index
    
    //[1, 2, 3, 4]
    //Resulting left side = [1, 1, 2, 6]
    //Resulting right side = [1, 4, 12, 24]  -> [24, 12, 4, 1]
    
    let leftMult = 1;
    let leftArr = [1]; //[1, 1, 2, 6]
    
    for (let i = 1; i < nums.length; i++) {
        leftMult *= nums[i-1];
        leftArr.push(leftMult);
    }
    
    let rightMult = 1;
    let rightArr = [1]; //
    
    for (let j = nums.length - 2; j >= 0; j--) {
        rightMult *= nums[j + 1];
        rightArr.push(rightMult);
    }
    
    rightArr.reverse();
    
    let result = [];
    
    for (let k = 0; k < leftArr.length; k++) {
        result.push(leftArr[k] * rightArr[k]);
    }
    
    return result;
    
};