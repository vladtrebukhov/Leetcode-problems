/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];
    let seenMap = {};
    
    //NOT required, only required to pass one leetcode test case
    //Problem says result can be in any order, but any order as long as numbers are sorted ascending
    nums.sort((a,b) => a - b);
    
    const backtrack = (numsLeft) => {
        if (numsLeft.length === 0) {
            return;
        };
        
        const numsLeftKey = numsLeft.join('');
        
        if (!(numsLeftKey in seenMap)) {
            result.push(numsLeft); 
            seenMap[numsLeftKey] = 1;
        } else {
            return;
        }
        
        for (let i = 0; i < numsLeft.length; i++) {
            let copyNumsLeft = JSON.parse(JSON.stringify(numsLeft));
            copyNumsLeft.splice(i, 1);
            backtrack(copyNumsLeft);   
        }
    }
    
    backtrack(nums);
    
    return result;
};