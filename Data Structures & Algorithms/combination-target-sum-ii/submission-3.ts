class Solution {
    combinationSum2(candidates: number[], target: number): number[][] {
        // Group identical values with a frequency map — O(n), not a comparison sort.
        const freq = new Map<number, number>();
        for (const c of candidates) {
            freq.set(c, (freq.get(c) ?? 0) + 1);
        }

        const vals = [...freq.keys()];
        const counts = vals.map((v) => freq.get(v)!);
        const n = vals.length;

        type State = { idx: number; remaining: number; path: number[] };
        const stack: State[] = [{ idx: 0, remaining: target, path: [] }];
        const result: number[][] = [];

        while (stack.length > 0) {
            const { idx, remaining, path } = stack.pop()!;
            if (idx === n) continue;

            const val = vals[idx];
            const maxCount = counts[idx];

            // Try using this unique value 0..maxCount times, then move to the next unique value.
            for (let k = 0; k <= maxCount; k++) {
                const used = k * val;
                if (used > remaining) break; // safe: val is fixed and positive, so k*val is monotonic here
                const nextRemaining = remaining - used;
                const nextPath = k === 0 ? path : [...path, ...Array(k).fill(val)];

                if (nextRemaining === 0) {
                    result.push(nextPath); // guaranteed unique — no dedup needed
                } else {
                    stack.push({ idx: idx + 1, remaining: nextRemaining, path: nextPath });
                }
            }
        }

        return result;
    }
}
