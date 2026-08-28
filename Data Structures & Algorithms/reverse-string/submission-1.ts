class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        if (!s || !Array.isArray(s)) return;

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            const temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }
    }
}
