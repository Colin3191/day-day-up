/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]; // 历史最低价格
    let maxProfit = 0; // 最大利润
    
    for (let i = 1; i < prices.length; i++) {
        // 更新历史最低价格
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // 计算当天卖出的利润，更新最大利润
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    
    return maxProfit;
};

export default maxProfit;
