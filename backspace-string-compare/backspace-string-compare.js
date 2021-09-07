/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {    
    const backSpace = (string) => {
        let result = string;
        
        while (result.indexOf('#') >= 0)  {
            if (result.indexOf('#') === 0) {
                result = result.substring(1, result.length);
            } else {
                result = result.substring(0, result.indexOf('#') - 1) + result.substring(result.indexOf('#') + 1, string.length);
            }
        }
        return result;
    }
    
    return backSpace(t) === backSpace(s) ? true : false;
};
