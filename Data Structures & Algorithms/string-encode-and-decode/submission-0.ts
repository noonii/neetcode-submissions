class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(str => `${str.length}#${str}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {

            // find encoding position
            let j = i;
            while (str[j] !== '#') j++;

            // find length before encoding position
            const len = parseInt(str.slice(i, j));
            const beg = j+1;
            const end = beg + len;

            // slice after encoding pos to length of string pos
            result.push(str.slice(beg, end));

            // move cursor
            i = end;
        }

        return result;
    }
}
