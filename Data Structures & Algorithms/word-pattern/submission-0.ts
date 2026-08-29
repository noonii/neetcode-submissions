class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern: string, s: string): boolean {
        const words = s.split(' '); // [dog, cat, cat, dog]

        if (pattern.length !== words.length) return false;

        const mapPS = new Map();
        const mapSP = new Map();

        for (let x = 0; x < pattern.length; x++) {
            const c1 = pattern[x];
            const c2 = words[x];

            if (
                (mapPS.has(c1) && mapPS.get(c1) !== c2) ||
                (mapSP.has(c2) && mapSP.get(c2) !== c1)
            ) {
                return false;
            }

            mapPS.set(c1, c2);
            mapSP.set(c2, c1);
        }

        return true;
    }
}
