class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length < 2) return false;

        if (s[0] === ")" || s[0] === "]" || s[0] === "}") {
            return false;
        }

        const stack = [];
        const closeToOpen = new Map([
            ["}", "{"],
            ["]", "["],
            [")", "("],
        ]);

        for (const c of s) {
            if (closeToOpen.has(c)) {
                if (stack.length && stack[stack.length - 1] === closeToOpen.get(c)) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return !stack.length;
    }
}
