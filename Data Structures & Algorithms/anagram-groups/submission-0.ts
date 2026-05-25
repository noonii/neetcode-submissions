class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(a: string, b: string): boolean {
        if (a.length !== b.length) return false;

        const compareCode = "a".charCodeAt(0); // could be persistent in memory
        const count = new Array(26).fill(0);

        for (let x = 0; x < a.length; x++) {
            count[a.charCodeAt(x) - compareCode]++;
            count[b.charCodeAt(x) - compareCode]--;
        }

        return count.every((c) => c === 0);
    }

    groupAnagrams(strs: string[]): string[][] {
        const groups: string[][] = [];
        const grouped = new Set<number>();

        for (let m = 0; m < strs.length; m++) {
            const a = strs[m];

            if (grouped.has(m)) {
                continue; // skip
            }

            const group = [a];

            grouped.add(m);

            for (let n = m + 1; n < strs.length; n++) {
                const b = strs[n];
                if (this.isAnagram(a, b)) {
                    group.push(b);
                    grouped.add(n);
                }
            }

            groups.push(group);
        }

        return groups;
    }
}
