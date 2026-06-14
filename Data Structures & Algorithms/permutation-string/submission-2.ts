class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s2.length < s1.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let x = 0; x < s1.length; x++) {
            s1Count[s1[x].charCodeAt(0) - 97]++;
            s2Count[s2[x].charCodeAt(0) - 97]++;
        }

        let matches = 0;
        for (let x = 0; x < 26; x++) {
            if (s1Count[x] === s2Count[x]) matches++;
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            const indexR = s2.charCodeAt(r) - 97;
            s2Count[indexR]++;
            if (s1Count[indexR] === s2Count[indexR]) {
                matches++;
            } else if (s1Count[indexR] + 1 === s2Count[indexR]) {
                matches--;
            }

            const indexL = s2.charCodeAt(l) - 97;
            s2Count[indexL]--;
            if (s1Count[indexL] === s2Count[indexL]) {
                matches++;
            } else if (s1Count[indexL] - 1 === s2Count[indexL]) {
                matches--;
            }

            l++;
        }

        return matches === 26;
    }
}
