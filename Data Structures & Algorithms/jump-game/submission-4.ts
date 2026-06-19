class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        // handle negatives
        if (!nums.length || !Array.isArray(nums)) return false;
        if (nums.length > 1 && nums[0] === 0) return false;

        const n = nums.length;
        const dp = new Array(n).fill(false);
        // last index is the destination, should be true
        dp[n - 1] = true;
        // walk it backwards, starting before last index
        for (let x = n - 2; x >= 0; x--) {
            const end = Math.min(n - 1, x + nums[x]);
            for (let y = x + 1; y <= end; y++) {
                if (dp[y]) {
                    dp[x] = true;
                    break;
                }
            }
        }

        return dp[0];
    }
}
