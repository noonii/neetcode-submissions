class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        return this.topDownMemo(n, new Map());
    }

    topDownMemo(n: number, memo: Map<number, number>) {
        if (n === 0 || n === 1) {
            return 1;
        }

        if (memo.has(n)) {
            return memo.get(n);
        }

        const result = this.topDownMemo(n - 1, memo) + this.topDownMemo(n - 2, memo);

        memo.set(n, result);

        return result;
    }
}
