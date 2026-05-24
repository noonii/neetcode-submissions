class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

        for (let x = 0; x < nums.length; x++) {
            const diff = target - nums[x];
            if (!seen.has(diff)) {
                seen.set(nums[x], x);
            } else {
                return [seen.get(diff), x];         
            }
        }

        return [];
    }
}
