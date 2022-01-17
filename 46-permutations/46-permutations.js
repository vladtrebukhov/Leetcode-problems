/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    const backtrack = (numsLeft, permutation) => {
        if (permutation.length === nums.length) {
            result.push(permutation);
            return;
        }
        
        for (let i = 0; i < numsLeft.length; i++) {
            const copyNumsLeft = JSON.parse(JSON.stringify(numsLeft));
            copyNumsLeft.splice(i, 1); //remove 1 value at index of i
            backtrack(copyNumsLeft, [...permutation, numsLeft[i]]); //backtrack([2,3],[1])
        }
    };
    
    backtrack(nums, []);
    
    return result;
};