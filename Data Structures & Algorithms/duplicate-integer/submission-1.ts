class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        nums.sort((a, b) => a - b);
        for (let x = 1; x < nums.length; x++) {
            if (nums[x] === nums[x - 1]) {
                return true;
            }
        }
        return false;
    }
}
