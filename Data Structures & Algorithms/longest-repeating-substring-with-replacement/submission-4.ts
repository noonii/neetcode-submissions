class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        if (k < 0 || !s || s.length === 0) return 0;

        let l = 0;
        let maxFreq = 0;
        const count = new Map();

        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            const freq = (count.get(c) ?? 0) + 1;

            count.set(c, freq);

            if (freq > maxFreq) {
                maxFreq = freq;
            }

            // The window grows by one per iteration, so it can exceed k by at most one.
            // maxFreq is a historical upper bound, which is enough for tracking max length.
            if (r - l + 1 - maxFreq > k) {
                const leftChar = s[l];
                count.set(leftChar, count.get(leftChar) - 1);
                l++;
            }
        }

        return s.length - l;
    }
}
