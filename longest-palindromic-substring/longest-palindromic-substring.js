/**
 * @param {string} s
 * @return {string}
 */

//need to check even and odd palindromes (aa, aaa)
//loop from 1 to end, for each letter check to the left and to the right of letter
//if equal, then found palindrome, check against current longest
//At the same time check, if s[i-1] === s[i], if so, found even palindrome. Check against current longest
//babad
//cbbd //b
//racecar
//abba
//aaaa
//aaaaa
//abbba
//xxxxfffff
//zczcddtattarrattatddaskdlaslkd

var longestPalindrome = function(s) {
    let longest = s[0];
    
    if (s === s.split('').reverse().join('')) return s;
    let curr = s[0]; //rr
    
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