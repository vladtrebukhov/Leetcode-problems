/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
    //palindrome -> same forwards and backwards
    //palindrome can be built from center, so left and right characters must match
    //ex: racecar -> starting with e, check left and right cec, aceca etc...
    //palindrome will at least be s long as each individual char is a palindrome
    
    //Palindrome if:
    //Single character: 'a'
    //Two of the same character: 'aa'
    //If length > 2, s[left] === s[right] 'aaa'
    
    //Loop through s, incrementing count at each character
    //While s[right] === s[i], increment counter and right pointer (to keep looking for same character) -> 'raceeecar'
    //While s[left] === s[right], keep incrementing counter. Decrement left and increment right pointers. -> 'ceeec' in above example
    
    let counter = 0;
    let left;
    let right;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        counter++;
        right = i + 1;
        left = i - 1;
            
        while (s[right] === char) {
            counter++;
            right++;
        }
        
        while (s[right] === s[left] && s[right] && s[left]) {
             counter++;
             right++;
             left--;
        } 
    }
    
    return counter;
};
