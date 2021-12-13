/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //123 -> '123' -> ['1','2','3'] -> ['3','2','1'] -> '321' -> 321
    
    const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return reversed <= 2**31 - 1 && reversed >= -(2**31) ? reversed : 0;
};
