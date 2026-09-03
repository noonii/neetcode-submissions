class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let rob1 = 0;
        let rob2 = 0;

        for (const num of nums) {
            const tmp = Math.max(rob1 + num, rob2);
            rob1 = rob2;
            rob2 = tmp;
        }

        return rob2;
    }
}
