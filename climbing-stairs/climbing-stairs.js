/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //n = 3, by 2 -> n = 1
    //n = 3, by 1 -> n = 2
    
    //n = 1, by 2 -> n = -1
    //n = 1, by 1 -> n = 0
    
    //n = 2, by 2 -> n = 0
    //n = 2, by 1 -> n = 1
    
    //n = 1 = same steps as above, need to memo n = 1
    
//.    Unmemoized recursive
//     let count = 0;
    
//     const keepClimbing = (n) => {
//         if (n < 0) return;
        
//         if (n === 0) {
//             count++;
//         }
        
//         keepClimbing(n - 2);
//         keepClimbing(n - 1);
//     }
   
//     keepClimbing(n);
    
//     return count;
    
    let memo = {};
    
    const keepClimbing = (n) => {
        if (n <= 1)  return 1;
        
        if (n === 2)  return 2;
        
        if (memo[n])  {
            return memo[n];
        } else {
            return memo[n] = keepClimbing(n-1) + keepClimbing(n - 2);
        }
    }
    
    return keepClimbing(n);
};