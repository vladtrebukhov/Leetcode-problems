/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    //s = "ABAB", k = 2 -> AAAA = 4
    //s = "AABABBA", k = 1 -> AAAABBA = 4
    //s = "ABCD", k = 0 -> ABCD = 1
    //s = "AAAA", k = 0 -> AAAA = 4
    //s = "ABCD", k = 3 - > AAA = 4
    //s = "ABAA", k = 0 -> AA = 2
    
    if (!s) return '';
    
    let start = 0;
    let pointer = start + 1;
    let end = s.length - 1;
    let currentString = s[start]; //B
    let maxLength = 0;
    let currK = k;
    
    
    while (start < end) {
        let initial_letter = s[start];
        let current_letter = s[pointer];
        
        if (current_letter !== initial_letter) {
            if (currK > 0) {
                currentString += initial_letter;
                currK--;
                pointer++;
            } else {
                start++;
                pointer = start + 1;
                currentString = s[start];
                currK = k;
            }
        } else {
            currentString += initial_letter;
            pointer++;
        }
        
        if (currentString.length === s.length) return s.length;
        
        
        maxLength = Math.max(maxLength, currentString.length);
    }
    
    return maxLength;
};