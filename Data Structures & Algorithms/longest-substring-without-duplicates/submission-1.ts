class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const count = new Map<string, number>();
        let longest = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            // add right
            count.set(s[r], (count.get(s[r]) ?? 0) + 1)

            // is window invalid? repair
            while (count.get(s[r]) > 1) {
                count.set(s[l], (count.get(s[l]) ?? 0) - 1);
                l++;
            }

            // calc
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
