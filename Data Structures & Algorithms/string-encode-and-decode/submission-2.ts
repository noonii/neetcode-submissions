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
        // 5#Hello5#World
        const res: string[] = [];
        let x = 0;
        while (x < str.length) {
            let len = 0;
            while (str.charCodeAt(x) !== 35) {
                len = len * 10 + str.charCodeAt(x) - 48;
                x++;
            }
            const beg = x+1;
            const end = beg + len;
            res.push(str.substring(beg, end));
            x = end
        }

        return res;
    }
}
