/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if (Math.min(...candidates) > target) return [];
    
    let result = [];
    let seen = {}; //{'223': 1, }
    
    //[[2,2,3]]
    //[2,3,2], [3,2,2], [7]
    const helper = (arr, sum) => {
        if (sum === target) {
          let sequence = arr.sort((a,b) => a - b).join(''); //'223'
          if (seen[sequence]) {
            return
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