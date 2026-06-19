class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        // handle negatives
        if (!nums.length || !Array.isArray(nums)) return 0;
        if (nums.length > 0 && nums[0] === 0) return 0;

        const n = nums.length;
        // precomute the array with unreachable values
        const dp = new Array(n).fill(n + 1);
        // last position is 0 because it's the end
        dp[n - 1] = 0;
        
        // we start at the 2nd last index
        // ex: [2,4,1,1, 1 ,1] we start at 1, index 4
        for (let i = n - 2; i >= 0; i--) {
            // farthest index we can jump to from i
            const end = Math.min(n, i + nums[i] + 1);
            // try all positions to find minimum
            for (let j = i + 1; j < end; j++) {
                // [2, 1, 3, 2, 1, 0]
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }

        return dp[0];
    }


}
