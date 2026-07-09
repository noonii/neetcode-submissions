class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (!s || !t || s.length !== t.length) return false;

        const freq = new Int32Array(26);

        for (let x = 0; x < s.length; x++) {
            freq[s.charCodeAt(x) - 97]++;
            freq[t.charCodeAt(x) - 97]--;
        }

        for (let i = 0; i < 26; i++) {
            if (freq[i] !== 0) return false;
        }

        return true;
    }
}
