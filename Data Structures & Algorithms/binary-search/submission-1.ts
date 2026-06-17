class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length;

        while (l < r) {
            let mid = l + Math.floor((r - l) / 2);
            if (nums[mid] > target) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return l > 0 && nums[l - 1] === target ? l - 1 : -1;
    }
}
