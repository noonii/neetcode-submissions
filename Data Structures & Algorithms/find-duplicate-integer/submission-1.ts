class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        if (!nums || !Array.isArray(nums) || !nums.length) return -1;
        return this.floyd(nums);
    }

    /**
     * Space O(1)
     * Time O(1)
     * Note: Only works if duplicate number is gauranteed to be in nums.
     */
    floyd(nums: number[]): number {
        let slow = 0;
        let fast = 0;

        // find the cycle
        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) {
                break;
            }
        }

        // find dupe
        let slow2 = 0;
        while (true) {
            slow = nums[slow];
            slow2 = nums[slow2]
            if (slow === slow2) {
                return slow;
            }
        }
    }

    /**
     * Space O(1)
     * Time O(n^2)
     * Note: Works fine with or without dupe
     */
    brute(nums: number[]): number {
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
