class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const pre = new Array(nums.length).fill(1);
        const suf = new Array(nums.length).fill(1);

        // separated loops from prev submission
        for (let x = 1; x < nums.length; x++) {
            pre[x] = pre[x - 1] * nums[x - 1];
        }

        for (let y = nums.length - 2; y >= 0; y--) {
            suf[y] = suf[y + 1] * nums[y + 1];
        }

        const result = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            result[i] = pre[i] * suf[i];
        }

        return result;
    }
}
