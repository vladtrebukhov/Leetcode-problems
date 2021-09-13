/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // ( -> only 1 
    // (([ -> only open parens
    // ]]] -> only closed parens
    // ()[]{} -> open and closed that match each other
    // (] -> open and closed that dont match
    // (}) -> open and closed that match, but another closed or open exists
    // [] -> open and closed that match
    
    //Must need equal amounts of open and closed parens
    //Create a stack, add to stack whenever we meet open parens
    //If closed parens, pop off parens from stack and compare to current parens -> if no match, return false
    //If you meet closed parens first with nothing on the stack, return true (closed parens appears first -> alwasy false)
      
    if (s.length === 1) return false;
    
    const isOpen = (parens) => {
        return parens === '(' || parens === '[' || parens === '{';
    }
    
    const isMatching = (open, closed) => {
        if (open === '(' && closed === ')' || open === '[' && closed === ']' || open === '{' && closed === '}') {
            return true;
        } else {
            return false;
        }
    }

    let stack = [];  //
    
    for (let i = 0; i < s.length; i++) {
        if (isOpen(s[i])) {
            stack.push(s[i]);
        } else {
            if (!stack.length) {
                return false;
            }
            let open = stack.pop(); 
            
            if (!isMatching(open, s[i])) {
                return false;
            }
            
        }     
    }
    
    return !stack.length ? true : false;
};