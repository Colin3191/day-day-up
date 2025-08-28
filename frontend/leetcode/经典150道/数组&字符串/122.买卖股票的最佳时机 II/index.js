/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 贪心算法：抓住每一次价格上涨的机会
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // 只要明天价格比今天高，就今天买入明天卖出
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit;
};

// 动态规划解法
var maxProfitDP = function(prices) {
    const n = prices.length;
    // dp[i][0] 表示第 i 天不持有股票的最大利润
    // dp[i][1] 表示第 i 天持有股票的最大利润
    let dp0 = 0; // 不持有股票
    let dp1 = -prices[0]; // 持有股票
    
    for (let i = 1; i < n; i++) {
        let newDp0 = Math.max(dp0, dp1 + prices[i]); // 不持有：保持不持有 或 卖出
        let newDp1 = Math.max(dp1, dp0 - prices[i]); // 持有：保持持有 或 买入
        dp0 = newDp0;
        dp1 = newDp1;
    }
    
    return dp0; // 最后一天不持有股票的利润最大
};

export default maxProfit;
