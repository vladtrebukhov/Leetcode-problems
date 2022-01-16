/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let evens = 0;
    let map = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        map[char] = map[char] + 1 || 1;
    }
    
    const values = Object.values(map);

    let odds = Object.values(map).filter(value => value % 2 === 1);
    
    let maxOdd = odds.length ? Math.max(...odds) : 0;
    
    const initialMaxOdd = maxOdd;
    
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        
        if (value % 2 === 0) evens += value;
        if (value % 2 === 1) maxOdd += (value - 1);
    }
    
    return maxOdd > 0 ? maxOdd - (initialMaxOdd - 1) + evens : evens;
};