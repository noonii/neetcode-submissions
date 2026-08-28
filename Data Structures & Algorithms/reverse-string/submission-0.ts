class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        if (!s || !Array.isArray(s)) return;

        // O(1) space meaning use existing array and swap

        s.reverse()
    }
}
