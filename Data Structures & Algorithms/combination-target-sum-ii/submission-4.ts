class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        // Use freq
        const freq = new Map<number, number>();
        for (const c of candidates) {
            freq.set(c, (freq.get(c) ?? 0) + 1);
        }

        const vals = [...freq.keys()];
        const counts = vals.map((v) => freq.get(v)!);
        const n = vals.length;

        // Use DFS
        type State = { idx: number; remainder: number; path: number[] };
        const stack: State[] = [{ idx: 0, remainder: target, path: [] }];
        const res: number[][] = [];

        while (stack.length > 0) {
            const { idx, remainder, path } = stack.pop()!;
            if (idx === n) continue;

            const val = vals[idx];
            const maxCount = counts[idx];

            for (let k = 0; k <= maxCount; k++) {
                const used = k * val;
                if (used > remainder) break;
                const nextRemainder = remainder - used;
                const nextPath = k === 0 ? path : [...path, ...Array(k).fill(val)];

                if (nextRemainder === 0) {
                    res.push(nextPath);
                } else {
                    stack.push({ idx: idx + 1, remainder: nextRemainder, path: nextPath });
                }
            }
        }

        return res;
    }
}
