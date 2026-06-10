class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) ++l; // skip
            while (l < r && !this.isAlphanumeric(s[r])) --r; // skip
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }

    isAlphanumeric(c) {
        const code = c.charCodeAt(0);
        return (
            (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) ||
            (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
            (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0))
        );
    }
}
