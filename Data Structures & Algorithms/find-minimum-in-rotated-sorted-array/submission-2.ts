class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if (!nums || !Array.isArray(nums) || !nums.length) return -1;

        let l = 0; 
        let r = nums.length - 1;

        while (l < r) {
            const mid = Math.floor((l+r) / 2);
            if (nums[mid] < nums[r]) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return nums[l];
    }
}
