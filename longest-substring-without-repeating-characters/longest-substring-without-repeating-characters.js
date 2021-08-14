/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //Sliding window, left and right pointer at 0
    //if substring between left and right does not have character, increment right
    //if substring between left and right has character, increment left
    //check maxLength against current max and substring
    
    if (s.length === 1) return 1;
    
    let set = new Set(); //w
    let index = 0;
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
                set.delete(s[index]);
                index++;
            }
        
        set.add(s[i]);
        
        maxLength = Math.max(maxLength, i - index + 1);
    }
    
    return maxLength;
};