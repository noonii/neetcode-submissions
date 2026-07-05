class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        if (k < 0 || !s || !s.length) return 0;

        const freq: number[] = [];
        let l = 0;
        let maxF = 0;
        let longest = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s.charCodeAt(r);
            freq[c] = (freq[c] ?? 0) + 1;

            if (freq[c] > maxF) {
                maxF = freq[c];
            }

            let winL = r - l + 1;

            while (winL - maxF > k) {
                const leftChar = s.charCodeAt(l);
                freq[leftChar]--;
                l++;
                winL--;
            }

            if (winL > longest) {
                longest = winL;
            }
        }

        return longest;
    }
}
