class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        for (let x = 0; x < nums.length; x++) {
            let j = x + 1;
            while (j < nums.length) {
                if (nums[j] === nums[x]) return nums[j];
                j++;
            }
        }
        return -1;
    }
}
