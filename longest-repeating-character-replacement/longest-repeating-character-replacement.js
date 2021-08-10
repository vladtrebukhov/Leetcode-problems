/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// s = "AABABBA", k = 1
var characterReplacement = function(s, k) {
 
    let frequency = {}
    let left = 0;
    let longest = 0; 
    
    for (let right = 0; right < s.length; right++) {
       frequency[s[right]] = frequency[s[right]] + 1 || 1;
         
       let str_length = right - left + 1; 
    
       let letters_to_replace = str_length - Math.max(...Object.values(frequency));
        
        if (letters_to_replace > k) {
            frequency[s[left]]--;
            left++;
        }
       
        longest = Math.max(longest, right - left + 1);
    }
    
    return longest;
};
