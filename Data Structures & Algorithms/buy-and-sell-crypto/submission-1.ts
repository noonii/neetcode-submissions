class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // prices[i] = Neet Coin
        // [10, 1, 5, 6, 7, 1]
        // Buy low sell high

        let max = 0;
        let min = prices[0];

        for (let x = 1; x < prices.length; x++) {
            if (prices[x] < min) {
                min = prices[x];
            } else {
                const profit = prices[x] - min;
                if (profit > max) {
                    max = profit;
                }
            }
        }

        return max;
    }
}
