/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //If curr > next, swap, else keep iterating
    //Else while curr < prev, keep swapping curr with prev
    //Save start index as we'll be decrementing i. Once finished, reset i to initial i
    //O(n^2) -> could swap ever element then last element could be smallest, so has to be moved 
    //all the way to the start from the end
    
//     let startIndex;
    
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] <= nums[i+1]) {
//             continue;
//         } else {
//             startIndex = i;
            
//             [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
            
//             while (nums[i-1] !== undefined && i >= 0 && nums[i] < nums[i-1]) {
//                 [nums[i], nums[i-1]] = [nums[i-1], nums[i]];
//                 i--;
//             }  
            
//             if (i !== startIndex) i = startIndex;
//         }
//     }
    
//     return nums;
    
    return nums.sort((a,b) => a - b)
};