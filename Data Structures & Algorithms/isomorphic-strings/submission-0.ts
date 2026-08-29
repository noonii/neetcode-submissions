class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const mapST = new Map<string, string>();
        const mapTS = new Map<string, string>();

        // foo -> bar
        for (let x = 0; x < s.length; x++) {
            let c1 = s[x];
            let c2 = t[x];

            // x = 2, a !== r
            if (
                (mapST.has(c1) && mapST.get(c1) !== c2) ||
                (mapTS.has(c2) && mapTS.get(c2) !== c1)
            ) {
                return false;
            }

            // x = 0, f -> b AND b -> f
            // x = 1, o -> a AND a -> o
            mapST.set(c1, c2);
            mapTS.set(c2, c1);
        }

        return true;
    }
}
