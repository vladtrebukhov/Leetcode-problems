/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === s.split('').reverse().join('')) return s;
    
    let curr = s[0]; 
    let longest = s[0];
    
    for (let i = 1; i < s.length; i++) {
        s[i-1] === s[i] ? curr += s[i] : curr = s[i];
        
        let left = curr.length > 1 ? i - curr.length : i - 1;
        let right = i + 1;
        
        while (s[left] === s[right]) {
            let substr = s.substring(left, right + 1);
            
            if (substr.length > longest.length) {
                longest = substr;
            };
            
            left--;
            right++;
        }
        
        if (curr.length > longest.length) {
            longest = curr;
        }
    }
    
   return longest;
};
