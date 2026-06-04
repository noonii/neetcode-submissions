class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        const operators = new Set(["*", "/", "+", "-"]);

        for (const val of tokens) {
            if (operators.has(val)) {
                const a = stack.pop();
                const b = stack.pop();

                // operand order is key
                if (val === "*") stack.push(b * a);
                else if (val === "+") stack.push(b + a);
                else if (val === "-") stack.push(b - a);
                else if (val === "/") stack.push(Math.trunc(b / a)); // no float
            } else {
                stack.push(Number(val));
            }
        }

        return stack.pop();
    }
}
