class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s: string, p: string): boolean {
        // top down memo
        const sLen = s.length;
        const pLen = p.length;
        const cache = new Map<string, boolean>();

        const dfs = (i, j) => {
            const key = `${i},${j}`;

            if (cache.has(key)) {
                return cache.get(key);
            }

            if (i >= sLen && j >= pLen) {
                return true;
            }

            if (j >= pLen) {
                return false;
            }

            let match = i < sLen && (s[i] === p[j] || p[j] === ".");

            if (j + 1 < pLen && p[j + 1] === "*") {
                match =
                    dfs(i, j + 2) || // dont use *
                    (match && dfs(i + 1, j)); // use *

                cache.set(key, match);

                return cache.get(key);
            }

            if (match) {
                match = dfs(i + 1, j + 1);
                cache.set(key, match);
                return match;
            }

            cache.set(key, false);

            return false;
        };

        return dfs(0, 0);
    }
}
