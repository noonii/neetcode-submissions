class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) ?? 0) + 1)
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [k, freq] of count) {
            buckets[freq].push(k);
        }

        const topK = [];
        for (let x = buckets.length - 1; x >= 0 && topK.length < k; x--) {
            topK.push(...buckets[x])
        }

        return topK;
    }
}
