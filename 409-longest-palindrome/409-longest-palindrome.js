/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //Count all occurances of letters
    //Add all even occurances together since they can go on left and right of center always makeing a longer palindrome
    //Pick the maximum odd number as center
    //Loop through all values, whenever an odd is found, add odd - 1 (now even) to counter
    //Since we need a center if any odds exist, we must add plus 1 to answer because we cant subtract from center initially like the other odd values - 1 (even) that we would add to each side
    
    let count = 0;
    let map = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        map[char] = map[char] + 1 || 1;
    }
    
    const values = Object.values(map);
    const odds = Object.values(map).filter(value => value % 2 === 1);
    const maxOdd = odds.length ? Math.max(...odds) : 0;
    
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        
        if (value % 2 === 0) count += value;
        if (value % 2 === 1) count += (value - 1);
    }
    
    return maxOdd > 0 ? count + 1 : count;
};