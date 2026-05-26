class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // O(n) simplified and readable solution
        const str = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

        // cut loop in half to test a true palindrome
        for (let x = 0; x < str.length / 2; x++) {
            const beg = str[x]; 
            const end = str[str.length - 1 - x];
            if (beg !== end) {
                return false;
            }
        }

        return true;
    }
}
