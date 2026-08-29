class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x: number): number {
        const hasNegative = x < 0;
        const val = Number(String(Math.abs(x)).split("").reverse().join(""));
        const finalResult = hasNegative ? -val : val;

        if ((finalResult | 0) !== finalResult) {
            return 0;
        }

        return finalResult;
    }
}
