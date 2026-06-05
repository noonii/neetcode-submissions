class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: number[][] = [];
        const output = new Array(temperatures.length).fill(0);
        const n = temperatures.length;

        for (let i = 0; i < n; i++) {
            const temp = temperatures[i];
            while (stack.length && temp > stack[stack.length - 1][0]) {
                const [,index] = stack.pop();
                const days = Math.abs(i - index);
                output[index] = days;
            }

            stack.push([temp, i]);
        }

        return output;
    }
}
