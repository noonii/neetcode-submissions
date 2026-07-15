class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let longest = 0;
        const set = new Set(nums);

        for (const num of nums) {
            // find the base
            if (set.has(num - 1)) continue;

            // calculate sequence
            let length = 1;

            while (set.has(num + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }

        return longest;
    }
}
