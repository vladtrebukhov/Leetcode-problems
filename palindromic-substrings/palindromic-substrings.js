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
    
    //Loop through s, incremeting count at each character
    //If s[right] === s[i], increment counter (found even case)
    //While s[left] === s[right], keep incrementing counter (found odd case)
    
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
