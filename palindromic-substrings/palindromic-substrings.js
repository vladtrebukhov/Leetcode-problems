/**
 * @param {string} s
 * @return {number}
 */

//Total will be at least the length of string, each character can be a palindrome itself
//abc -> 3
//aba - > 4 
//sxdsdssaa -> dsd, sds, ss, aa + 9 individual strings -> 13  //6
//aaa -> a, a, a, aa, aa, aaa -> 6
//racecar -> 10
var countSubstrings = function(s) {    
    let start = 0;
    let pointer = start;
    let end = s.length - 1;
    let count = 0; //3

    //aba -> 4
    const isPalindrome = (s) => {
        return s.split('').reverse().join('') === s;
    }
    
    while (start <= end) {
        if (isPalindrome(s.substring(start, pointer + 1))) {
            count++;
        }
        
        pointer++;
        
        if (pointer === s.length) {
            start++;
            pointer = start;
        }
    }
    
    return count;
};