class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);
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

            for (let i = entry.start; i < candidates.length; i++) {
                if (i > entry.start && candidates[i] === candidates[i - 1]) continue;

                const nextSum = entry.sum + candidates[i];

                if (nextSum > target) break;

                const nextPath = [...entry.path, candidates[i]];

                if (nextSum === target) {
                    res[tail++] = nextPath;
                    continue;
                }

                stack[top++] = {
                    start: i + 1,
                    sum: nextSum,
                    path: nextPath,
                };
            }
        }

        return res;
    }
}
