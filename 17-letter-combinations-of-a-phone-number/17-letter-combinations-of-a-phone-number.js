/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
   let map = {'2':'abc', '3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'};
    
    if (!digits.length) return [];
    
    let output = [];
    
    const backtracking = (i, currString) => {
        if (currString.length === digits.length) {
            output.push(currString);
            return;
        }
        for (let j = 0; j < map[digits[i]].length; j++) {
            backtracking(i + 1, currString + map[digits[i]][j]);
        }
    }
    
    backtracking(0, "");
    
    return output;
};