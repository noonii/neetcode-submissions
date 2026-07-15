class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums || !nums.length) return 0;
        
        const set = new Set(nums);
        let longest = 0;

        for (const num of nums) {
            if (!set.has(num - 1)) {
                let length = 1;
                while (set.has(length + num)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }

        return longest;
    }
}
