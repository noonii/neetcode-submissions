class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let l = 0;

                // check if next iteration exists
                while (set.has(num + l)) l++;

                longest = Math.max(longest, l);
            }
        }

        return longest;
    }
}
