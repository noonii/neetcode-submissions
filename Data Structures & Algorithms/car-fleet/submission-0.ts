class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const pairs = position.map((pos, i) => [pos, speed[i]]).sort((a, b) => a[0] - b[0]);
        const stack = [];

        for (let i = pairs.length - 1; i >= 0; i--) {
            const timeToTarget = (target - pairs[i][0]) / pairs[i][1];
            if (!stack.length || timeToTarget > stack[stack.length - 1]) {
                stack.push(timeToTarget);
            }
        }

        return stack.length;
    }
}
