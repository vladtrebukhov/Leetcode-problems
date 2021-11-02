/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        //( -> only one invalid
        //((( -> only open invalid
        //]]]]] -> only closed invalid
        //() -> open closed valid
        //(] -> open closed invalid
        //({[]}) -> open closed valid
        //()[]{} -> open closed valid
    
        //O(n) time -> O(n) space
        //Loop through s, whenever encounter open, push to stack
        //Whenever encounter closed, pop off open from stack, compare open to current closed
        //If !stack.length when on closed, return false (there is no open on stack to match)
        //If at end stack.length > 0, false; still open unmatched parens left

        const matchParens = (currentClosed, stack) => { 
            const currentOpen = stack.pop();
          
            if (currentClosed === ')' && currentOpen !== '(' 
                || currentClosed === ']' && currentOpen !== '[' 
                || currentClosed === '}' && currentOpen !== '{') {
                return false;
            }
        };
        
        let stack = []; 
    
        for (let i = 0; i < s.length; i++) {
            let parens = s[i];
            
            //Open case
            if (parens === '(' || parens === '[' || parens === '{') {
                stack.push(parens);
            } else {
                if (!stack.length || matchParens(parens, stack) === false) {
                    return false;
                }
            }
        }
    
        return stack.length > 0 ? false : true
};