/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if (Math.min(...candidates) > target) return [];
    
    let result = [];
    let seen = {};
    
    const helper = (arr, sum) => {
        if (sum === target) {
          const sequence = arr.sort((a,b) => a - b).join('');
            
          if (seen[sequence]) {
            return;
          } else {
            result.push(arr);
            seen[sequence] = 1;
            return;    
          }
        }
        
        if (sum > target) return;
        
        for (let i = 0; i < candidates.length; i++) { 
            helper([...arr,candidates[i]], sum + candidates[i]);
        }
    }
    
    helper([],0);
    
    return result;
};