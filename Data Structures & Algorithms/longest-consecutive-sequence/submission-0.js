class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (const num of set) {
            // if doesn't have something lower than it, start a base
            if (!set.has(num - 1)) {
                let length = 1;

                while (set.has(num + length)) {
                    length++; // next num exists, try next
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
