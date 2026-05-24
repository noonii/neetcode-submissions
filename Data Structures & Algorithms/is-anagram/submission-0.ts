class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const count = new Array(26).fill(0);
        const compareCode = 'a'.charCodeAt(0);

        for (let x = 0; x < s.length; x++) {
            count[s.charCodeAt(x) - compareCode]++;
            count[t.charCodeAt(x) - compareCode]--;
        }

        return count.every(c => c === 0);
    }
}
