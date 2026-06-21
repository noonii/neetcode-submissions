class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if (!nums || !Array.isArray(nums) || !nums.length) return -1;
        if (isNaN(target)) return -1;
        // if (nums[0] === target) return 0; // dice roll luck

        let l = 0;
        let r = nums.length - 1;

        // [1,3]
        while (l <= r) {
            // index = 0
            const mid = Math.floor((l + r) / 2);

            // 1 === 3
            if (nums[mid] === target) {
                return mid;
            }

            // handle left side check
            if (nums[l] <= nums[mid]) {
                // 1 < 3 AND 1 < 3 ?
                if (nums[l] <= target && target < nums[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                // handle right side check
                if (nums[r] >= target && target > nums[mid]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }

        return -1;
    }
}
