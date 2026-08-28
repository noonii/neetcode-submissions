class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (const str of strs) {
            const freq = new Array(26).fill(0);

            for (let x = 0; x < str.length; x++) {
                freq[str.charCodeAt(x) - 97]++;
            }

            const key = freq.join(',');
            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }        

        return Array.from(map.values());
    }
}
