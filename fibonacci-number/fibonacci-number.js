/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 1) return 1;
    
    let a = 0;
    let b = 1; 
    let result = 0;
    let count = 1;
    
    while (count < n) {
        result = a + b;
        count++;
        a = b;
        b = result;
    };
    
    return result;
};