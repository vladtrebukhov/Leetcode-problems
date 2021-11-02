/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; 
    
    let sMap = {}; 
    
    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = sMap[s[i]] + 1 || 1;
    }
    
    let tMap = {}; 
    
    for (let j = 0; j < t.length; j++) {
        tMap[t[j]] = tMap[t[j]] + 1 || 1;
    }
    
    for (let char in sMap) {
        if (sMap.hasOwnProperty(char)) {
            if (!tMap[char] || tMap[char] !== sMap[char]) {
                return false;
            }
        }
    }
    
    return true;
};