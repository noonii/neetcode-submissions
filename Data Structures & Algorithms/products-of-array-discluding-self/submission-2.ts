class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array(nums.length).fill(1);
        
        // prefix
        for (let x = 1; x < nums.length; x++) {
            result[x] = result[x - 1] * nums[x - 1];
        }

        let suffix = 1;
        for (let x = nums.length - 2; x >= 0; x--) {
            suffix *= nums[x + 1];
            result[x] *= suffix;
        }

        return result;
    }
}
