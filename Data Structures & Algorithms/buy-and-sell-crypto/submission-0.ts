class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minBuy = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            minBuy = Math.min(minBuy, prices[i]);

            const profit = prices[i] - minBuy;

            maxProfit = Math.max(maxProfit, profit);
        }

        return maxProfit;
    }
}
