class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let one = 1;
        let two = 1;

        for (let x = 0; x < n - 1; x++) {
            const tmp = one;
            one = one + two;
            two = tmp;
        }

        return one;
    }
}
