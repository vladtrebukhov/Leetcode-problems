/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];
    let seenMap = {};
    
    nums.sort((a,b) => a - b);
    
    const backtrack = (numsLeft) => {
        if (numsLeft.length === 0) {
            return;
        };
        
        const numsLeftKey = numsLeft.join(''); //'2410'
        
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