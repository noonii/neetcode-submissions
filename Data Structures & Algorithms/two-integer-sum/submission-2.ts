class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if (!nums || !nums.length || isNaN(target)) return null;
        if (nums.length < 2) return null;

        for (let x = 0; x < nums.length; x++) {
            let j = x + 1;
            while (j !== x && j < nums.length) {
                const sum = nums[j] + nums[x];
                if (sum === target) {
                    return [x, j];
                }
                j++;
            }
        }

        return [];
    }
}
