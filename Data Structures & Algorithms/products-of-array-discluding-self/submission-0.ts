class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const pre = new Array(nums.length).fill(1);
        const suf = new Array(nums.length).fill(1);

        for (let x = 1, y = nums.length - 2; x < nums.length && y >= 0; x++, y--) {
            pre[x] = pre[x - 1] * nums[x - 1];
            suf[y] = suf[y + 1] * nums[y + 1];
        }

        const result = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            result[i] = pre[i] * suf[i];
        }

        return result;
    }
}
