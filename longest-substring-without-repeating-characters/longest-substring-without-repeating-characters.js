/**
 * @param {string} s
 * @return {number}
 */

//Set solution
//Keep adding to set if not in set, 
//keep removing from incremental index starting from start of string if in set
//Set max to be difference between current pointer and index of removed chars
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;
    
    let set = new Set();
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

//Alternate Solution Two Pointer + Queue
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;
    
    let maxLength = 0;
    let left = 0;
    let right = 0;
    let queue = [];
    
    while (right < s.length) {
        if (!queue.includes(s[right])) {
            queue.push(s[right]);
            right++;
            
            if (queue.length > maxLength) {
                maxLength = queue.length;
            }
        } else {
            queue.shift();
            left++;
        }
    }
    
    return maxLength;
};
