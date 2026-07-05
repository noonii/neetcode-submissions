class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (!s1 || !s2 || !s1.length || !s2.length) return false;
        if (s1.length > s2.length) return false;

        const s1Count = new Int32Array(26);
        const s2Count = new Int32Array(26);

        for (let x = 0; x < s1.length; x++) {
            s1Count[s1.charCodeAt(x) - 97]++;
            s2Count[s2.charCodeAt(x) - 97]++;
        }

        let matches = 0;

        for (let x = 0; x < 26; x++) {
            if (s1Count[x] === s2Count[x]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) return true;

            // Slide the fixed-size window one step right:
            // s2[r] enters the window, and s2[l] leaves it.
            const indexR = s2.charCodeAt(r) - 97;
            s2Count[indexR]++;

            // After incrementing:
            // - if counts are equal, this character just became matched
            // - if s2 is now one above s1, it was matched before and just became unmatched
            if (s1Count[indexR] === s2Count[indexR]) {
                matches++;
            } else if (s1Count[indexR] + 1 === s2Count[indexR]) {
                matches--;
            }

            const indexL = s2.charCodeAt(l) - 97;
            s2Count[indexL]--;

            // After decrementing:
            // - if counts are equal, this character just became matched
            // - if s2 is now one below s1, it was matched before and just became unmatched
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
