class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if (!nums || !Array.isArray(nums) || !nums.length) return -1;

        let l = 0; 
        let r = nums.length - 1;
        let min = nums[0];

        while (l <= r) {
            const mid = Math.floor((l+r) / 2);
            const val = nums[mid];

            if (val < min) {
                min = val;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return min;
    }
}
