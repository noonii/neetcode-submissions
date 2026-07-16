class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);
        const res: number[][] = [];

        type State = {
            start: number;
            sum: number;
            path: number[];
        };

        const seen = new Set();
        const stack: State[] = [{ start: 0, sum: 0, path: [] }];
        let top = 1;

        // [1,2,2,4,5,6,9]
        //       1
        //    .     .
        //   2       2
        //  .          .
        //4   5      6   9
        while (stack.length > 0) {
            const entry = stack.pop();

            for (let i = entry.start; i < candidates.length; i++) {
                const nextSum = entry.sum + candidates[i];

                if (nextSum > target) break;

                const nextPath = [...entry.path, candidates[i]];
                
                const nextPathKey = nextPath.toString();
                if (seen.has(nextPathKey)) continue;
                
                seen.add(nextPathKey);

                if (nextSum === target) {
                    res.push(nextPath);
                    continue;
                }

                stack.push({
                    start: i + 1,
                    sum: nextSum,
                    path: nextPath,
                });
            }
        }

        return res;
    }
}
