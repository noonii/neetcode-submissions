class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if (!nums || !nums.length || isNaN(target)) return null;
        if (nums.length < 2) return null;

        const seen = new Map<number, number>();

        for (let x = 0; x < nums.length; x++) {
            const diff = target - nums[x];
            if (seen.has(diff)) {
                return [x, seen.get(diff)];
            }
            seen.set(nums[x], x);
        }
    }
}
