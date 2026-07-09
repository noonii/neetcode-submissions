class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        if (!nums.length || k < 1) return null;

        const count = new Map<number, number>();
        for (const num of nums) {
            count.set(num, (count.get(num) ?? 0) + 1);
        }

        // sort by bucket
        const buckets: number[][] = [];
        for (const [num, freq] of count) {
            if (!buckets[freq]) buckets[freq] = [];
            buckets[freq].push(num);
        }

        const res = [];
        // loop through buckets and extract k
        for (let x = buckets.length - 1; x >= 0 && res.length < k; x--) {
            if (buckets[x]) {
                res.push(...buckets[x]);
            }
        }

        return res;
    }
}
