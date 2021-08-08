/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {  
    let lowestBuy = prices[0];
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestBuy) {
            lowestBuy = prices[i]
        } else {
            if (prices[i] - lowestBuy > maxProfit) {
                maxProfit = prices[i] - lowestBuy;
            }
        }
    }
    
    return maxProfit;
};