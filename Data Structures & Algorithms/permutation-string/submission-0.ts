class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        const charCode = "a".charCodeAt(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1[i].charCodeAt(0) - charCode] += 1;
            s2Count[s2[i].charCodeAt(0) - charCode] += 1;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] == s2Count[i]) matches += 1;
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) return true;

            {
                const index = s2[r].charCodeAt(0) - charCode;
                s2Count[index]++;
                if (s1Count[index] === s2Count[index]) {
                    matches++;
                } else if (s1Count[index] + 1 == s2Count[index]) {
                    matches--;
                }
            }

            {
                const index = s2[l].charCodeAt(0) - charCode;
                s2Count[index]--;
                if (s1Count[index] === s2Count[index]) {
                    matches++;
                } else if (s1Count[index] - 1 == s2Count[index]) {
                    matches--;
                }
            }

            l++;
        }

        return matches === 26;
    }
}
