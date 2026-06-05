class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        // brute force
        const stack = [];
        const n = temperatures.length;

        for (let i = 0; i < n; i++) {
            const tempA = temperatures[i];
            let found = false;

            for (let x = i + 1; x < n; x++) {
                const tempB = temperatures[x];

                if (tempA < tempB) {
                    const days = x - i;
                    found = true;
                    stack.push(days)
                    break;
                }
            }

            if (!found) {
                stack.push(0);
            }
        }

        return stack;
    }
}
