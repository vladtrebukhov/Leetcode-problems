/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    //Palindrome is same forwards and backwards
    //Palindrome can be be one character repeating many times or 
    //a character/characters repeating to the left and right of center
    //aa or racecar or raceecar or raceeecar
    //a, aa, aaa, aaaa, cbaaaabc
    
    //At each character, keep expanding right if char equals original -> a, aa, aaa
    //Once a character is reached where char != original, check left and current char if equal 
    //If equal, keep expanding left and right -> aaa, aaab, baaab, cbaaabc
    
    let left = 0;
    let right = 0;
    let output = s[0];
    let startLeft = 0;

    while (right < s.length) {
        while (s[right] === s[left]) { //e === e
            output = s.substring(left, right + 1).length > output.length ? s.substring(left, right + 1) : output;
            right++;
        }
        
        startLeft = left;
        while (s[right] !== undefined && s[left] !== undefined && s[right] === s[left - 1]) {
            output = s.substring(left - 1, right + 1).length > output.length ? s.substring(left - 1, right + 1) : output;
            left--;
            right++;
        }
        
        left = startLeft + 1;
        right = left;
    }
    
    return output;
    
};
