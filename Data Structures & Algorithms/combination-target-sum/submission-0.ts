class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        if (!nums || !nums.length) return [];

        nums.sort((a, b) => a - b);
        const res: number[][] = [];
        let tail = 0;

        type State = {
            start: number;
            sum: number;
            path: number[];
        };

        const stack: State[] = [{ start: 0, sum: 0, path: [] }];
        let top = 1;

        while (top > 0) {
            const entry = stack[--top];

            for (let i = entry.start; i < nums.length; i++) {
                const nextSum = entry.sum + nums[i];

                if (nextSum > target) {
                    break;
                }

                const nextPath = [...entry.path, nums[i]];

                if (nextSum === target) {
                    res[tail++] = nextPath;
                    continue;
                }

                stack[top++] = {
                    start: i,
                    sum: nextSum,
                    path: nextPath,
                };
            }
        }

        return res;
    }
}
