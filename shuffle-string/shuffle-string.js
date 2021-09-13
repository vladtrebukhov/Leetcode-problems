/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = Array(indices.length);
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let index = indices[i];
        
        result[index] = char;
    }
    
    return result.join('');
};