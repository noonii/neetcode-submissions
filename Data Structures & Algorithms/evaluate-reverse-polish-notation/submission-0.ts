class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        
        const processNums = (a, b, op) => {
            if (op === "*") return a * b;
            if (op === "+") return a + b;
            if (op === "-") return a - b;
            if (op === "/") return Math.trunc(a / b); // no float
            return null;
        }

        for (const val of tokens) {
            if (val === "*" || val === "+" || val === "-" || val === "/") {
                const numA = stack.pop();
                const numB = stack.pop();
                // operand order is key
                stack.push(processNums(numB, numA, val));
            } else {
                stack.push(Number(val));
            }
        }

        return stack.pop();
    }
}
