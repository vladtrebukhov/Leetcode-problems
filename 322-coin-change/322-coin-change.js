/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const fewestCoins = [];
    fewestCoins[0] = 0;
    
    
    //[1,2,5] amount = 6
    
    //[0,,Infinity,Infinity,Infinity,Infinity,Infinity]
    
    for (let i = 1; i <= amount; i++) {
        fewestCoins[i] = Infinity;
    };
    
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                fewestCoins[i] = Math.min(fewestCoins[i], 1 + fewestCoins[i - coins[j]]);
            }
        }
    }
    
    return fewestCoins[amount] === Infinity ? -1 : fewestCoins[amount];
};