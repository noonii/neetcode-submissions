class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        // handle negative tests
        if (!Array.isArray(nums) || !nums.length) return -1;
        if (nums.length > 1 && nums[0] === 0) return -1;

        let jumps = 0;
        let l = 0;
        let r = 0;

        while (r < nums.length - 1) {
            let farthest = 0;
            for (let i = l; i <= r; i++) {
                farthest = Math.max(farthest, nums[i] + i);
            }

            // stuck
            if (farthest <= r) return -1;

            l = r + 1;
            r = farthest;
            jumps++;
        }

        return jumps;
    }
}
