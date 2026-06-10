class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a, b) => a - b);

        for (let x = 0; x < nums.length; x++) {
            if (x > 0 && nums[x] === nums[x - 1]) continue;

            let l = x + 1;
            let r = nums.length - 1;

            while (l < r) {
                const threeSum = nums[x] + nums[l] + nums[r];
                if (threeSum > 0) {
                    r--;
                } else if (threeSum < 0) {
                    l++;
                } else {
                    res.push([nums[x], nums[l], nums[r]]);
                    l++;
                    while (nums[l] === nums[l - 1] && l < r) l++;
                }
            }
        }

        return res;
    }
}
