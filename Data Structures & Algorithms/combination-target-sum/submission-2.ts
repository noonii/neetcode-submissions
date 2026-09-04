class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res: number[][] = [];

        const dfs = (i: number, curr: number[], total: number) => {
            if (total === target) {
                res.push([...curr]);
                return;
            }

            if (i >= nums.length || total > target) {
                return;
            }

            curr.push(nums[i]);

            dfs(i, curr, total + nums[i]);

            curr.pop();

            dfs(i + 1, curr, total);
        };

        dfs(0, [], 0);

        return res;
    }
}
