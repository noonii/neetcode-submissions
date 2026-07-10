class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const pre = new Array(nums.length).fill(1);
        const suf = new Array(nums.length).fill(1);
        const output = new Array(nums.length);
        for (let x = 1; x < nums.length; x++) pre[x] = pre[x - 1] * nums[x - 1];
        for (let x = nums.length - 2; x >= 0; x--) suf[x] = suf[x + 1] * nums[x + 1];
        for (let x = 0; x < nums.length; x++) output[x] = pre[x] * suf[x];
        return output;
    }
}
