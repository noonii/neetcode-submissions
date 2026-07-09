class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen = new Map<string, string[]>();

        for (const str of strs) {
            const freq = new Array(26).fill(0);
            for (const c of str) {
                freq[c.charCodeAt(0) - 97]++;
            }

            const key = freq.join(",");
            if (!seen.has(key)) {
                seen.set(key, []);
            }

            seen.get(key).push(str);
        }

        return Array.from(seen.values());
    }
}
