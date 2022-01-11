/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
   let map = {'2':'abc', '3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'};
  
    //For each number in digits, pull out corresponding letters from map
    //Loop through each character adding to an empty string 
    //Inside loop, call recursive function with new string and index pointing to next digit in sequence to repeat process
    //Since you're combining one character from each digit at a time, max length of currString 
    //Is the length of digits. Once curr string length = digits length, add to output and return from recursion stack
    
    if (!digits.length) return [];
    
    const output = [];

    const backTracking = (digitsIndex, currString) => {
        if (currString.length === digits.length) {
            output.push(currString);
            return;
        }
        for (let i = 0; i < map[digits[digitsIndex]].length; i++) {
            const char = map[digits[digitsIndex]][i];
            backTracking(digitsIndex + 1, currString + char);
        }
    }
    
    backTracking(0, "");
    
    return output;
};