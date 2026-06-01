class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let min = "";

        if (t.length > s.length) return min;

        const tCount = new Map<string, number>();
        const window = new Map<string, number>();

        for (let x = 0; x < t.length; x++) {
            tCount.set(t[x], (tCount.get(t[x]) ?? 0) + 1);
        }

        let have = 0;
        let need = tCount.size;
        let best = [Infinity, 0, 0];
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const rightChar = s[r];
            window.set(rightChar, 1 + (window.get(rightChar) ?? 0));

            if (tCount.has(rightChar) && window.get(rightChar) === tCount.get(rightChar)) {
                have++;
            }

            while (have === need) {
                // find substring pos
                if (r - l + 1 < best[0]) {
                    best = [r - l + 1, l, r];
                }

                // pop from window
                const leftChar = s[l];
                window.set(leftChar, window.get(leftChar) - 1);
                if (tCount.has(leftChar) && window.get(leftChar) < tCount.get(leftChar)) {
                    have--;
                }

                // move window
                l++;
            }
        }


        if (best[0] !== Infinity) {
            min = s.substring(best[1], best[2] + 1);
        }

        return min;
    }
}
