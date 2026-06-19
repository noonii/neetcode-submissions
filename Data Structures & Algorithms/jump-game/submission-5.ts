class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        // handle negatives
        if (!nums.length || !Array.isArray(nums)) return false;
        if (nums.length > 1 && nums[0] === 0) return false;

        // Greedy approach
        let goal = nums.length - 1;

        for (let x = nums.length - 1; x >= 0; x--) {
            const spacesToJump = x + nums[x];
            if (spacesToJump >= goal) {
                goal = x;
            }
        }

        return goal === 0;
    }
}
