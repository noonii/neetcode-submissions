class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        if (!nums || nums.length === 0) return [];

        const sorted = nums.sort((a, b) => a - b);
        const res: number[][] = [];
        const n = nums.length;

        for (let k = 0; k < n - 2; k++) {
            if (k > 0 && sorted[k] === sorted[k - 1]) continue; // skip dupe

            let l = k + 1;
            let r = n - 1;

            // Smallest possible sum is already > 0.
            // Since nums is sorted, all future sums will also be > 0.
            if (nums[k] + nums[l] + nums[l + 1] > 0) break;

            // Largest possible sum is still < 0.
            // This k is too small, so skip it.
            if (nums[k] + nums[r - 1] + nums[r] < 0) continue;

            while (l < r) {
                const sum = nums[k] + nums[l] + nums[r];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([sorted[l], sorted[r], sorted[k]]);
                    l++;
                    r--;
                    while (l < r && sorted[l] === sorted[l - 1]) l++;
                    while (l < r && sorted[r] === sorted[r + 1]) r--;
                }
            }
        }

        return res;
    }
}
