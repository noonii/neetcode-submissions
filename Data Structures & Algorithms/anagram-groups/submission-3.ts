class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        return this.bruteForce(strs);
    }

    isAnagram(a: string, b: string): boolean {
        if (typeof a !== "string" || typeof b !== "string") return false;
        if (a.length !== b.length) return false;

        const freq = new Array(26).fill(0);
        for (let x = 0; x < a.length; x++) {
            freq[a.charCodeAt(x) - 97]++;
            freq[b.charCodeAt(x) - 97]--;
        }

        return freq.every((val) => val === 0);
    }

    bruteForce(strs: string[]): string[][] {
        const groups: string[][] = [];
        const seen = new Set();
        const n = strs.length;

        for (let x = 0; x < n; x++) {
            const str = strs[x];

            if (seen.has(str)) {
                continue;
            }

            const group = [str];
            seen.add(str);

            for (let y = x + 1; y < n; y++) {
                if (this.isAnagram(str, strs[y])) {
                    seen.add(strs[y]);
                    group.push(strs[y]);
                }
            }

            groups.push(group);
        }

        return groups;
    }
}
