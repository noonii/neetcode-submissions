class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            // skip non-alphanumerics
            while (l < r && !this.isAlphaNumeric(s[l])) ++l; 
            while (l < r && !this.isAlphaNumeric(s[r])) --r;

            // not creating new str in memory like prev submission for O(1) space
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    isAlphaNumeric(char: string): boolean {
        const code = char.charCodeAt(0);
        // rgx can become expensive, and i can't remember the char code numbers off top of my head
        return (
            (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0)) ||
            (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) ||
            (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0))
        );
    }
}
