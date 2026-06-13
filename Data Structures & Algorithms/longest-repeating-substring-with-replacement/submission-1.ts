class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // r - l + 1 < k
        // replace X's with Y's or Y's with X's (ex: XYYX)
        let longest = 0;
        const count = new Map<string, number>();
        let l = 0;
        let maxFreq = 0;

        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) ?? 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(s[r]));

            while (r - l + 1 - maxFreq > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
