class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => `${str.length}#${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const output = [];
        let i = 0;

        while (i < str.length) {
            // encoding put it at beginning so it handles edge cases like "He#llo"
            const j = str.indexOf('#', i);
            // length before delimiter, length provided from encoding
            const len = parseInt(str.slice(i, j)); 
            // j + 1 because after delimter up to length
            output.push(str.slice(j + 1, j + 1 + len)) 
            i = j + 1 + len; // move cursor
        }

        return output;
    }
}
