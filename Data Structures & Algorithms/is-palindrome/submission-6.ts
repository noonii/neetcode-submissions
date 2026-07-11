class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if (!s) return false;

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) l++; 
            while (l < r && !this.isAlphanumeric(s[r])) r--;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            
            l++;
            r--;
        }

        return true;
    }

    isAlphanumeric(c: string): boolean {
        if (!c) return false;
        const code = c.charCodeAt(0);
        return (
            (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
        );
    }
}
