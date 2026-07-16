class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res: number[][] = [];

        type State = {
            start: number;
            sum: number;
            path: number[];
        };

        const stack: State[] = [{ start: 0, sum: 0, path: [] }];

        while (stack.length > 0) {
            const entry = stack.pop();

            if (entry.sum === target) {
                res.push(entry.path);
                continue;
            }

            for (let i = entry.start; i < nums.length; i++) {
                const nextSum = entry.sum + nums[i];

                if (nextSum === target) {
                    res.push([...entry.path, nums[i]]);
                    continue;
                }

                if (nextSum < target) {
                    stack.push({
                        start: i,
                        sum: nextSum,
                        path: [...entry.path, nums[i]],
                    });
                }
            }
        }

        return res;
    }
}
