/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    
    let set = new Set(); //wke
    let index = 0;
    let longest = 0; 
    
    for (let i = 0; i < s.length;i++) {   
        while (set.has(s[i])) {
            set.delete(s[index]);
            index++;
        } 
        
        set.add(s[i]);
        
        longest = Math.max(longest, i - index + 1);
    }
    
    return longest;
};