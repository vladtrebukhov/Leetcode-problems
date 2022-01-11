/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const output = [];
    const parens = "()";
    
    if (n === 1) return [parens];
    
    const isValid = (parens) => {
        let stack = [];
        
        for (let i = 0; i < parens.length; i++) {
           if (parens[i] === '(') {
                stack.push(parens[i]); 
           } else {
               if (stack.length === 0) return false;
               stack.pop();
           }
        }
        
        return stack.length === 0;
    };
    
    const backtracking = (currParens) => {
        if (currParens.length === n * 2) {
            if (isValid(currParens)) {
                output.push(currParens); 
            }
            return;
        }
        for (let i = 0; i < parens.length; i++) { 
            backtracking(currParens + parens[i]);
        }
    };
    
    backtracking("");
    
    return output;
};