class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const counter = new Array(26).fill(0);
        const charCode = 'a'.charCodeAt(0);

        for (let x = 0; x < s.length; x++) {
            counter[s[x].charCodeAt(0) - charCode] += 1;
            counter[t[x].charCodeAt(0) - charCode] -= 1;
        }


        return counter.every(count => count === 0);
    }
}
