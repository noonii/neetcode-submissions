class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const results: number[][] = [];
        const sorted = nums.sort((a, b) => a - b);

        let l = 0;
        let r = sorted.length - 1;

        for (let x = 0; x < sorted.length - 2; x++) {
            if (x > 0 && sorted[x] === sorted[x - 1]) continue; // skip dupe

            l = x + 1;
            r = sorted.length - 1;

            while (l < r) {
                const sum = sorted[x] + sorted[l] + sorted[r];

                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    results.push([sorted[x], sorted[l], sorted[r]]);
                    l++;
                    r--;
                    // skip dupes
                    while (l < r && sorted[l] === sorted[l - 1]) l++;
                    while (l < r && sorted[r] === sorted[r + 1]) r--;
                }
            }
        }

        return results;
    }
}
