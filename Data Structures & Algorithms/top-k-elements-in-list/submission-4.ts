class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<number, number>();
        for (const num of nums) {
            count.set(num, (count.get(num) ?? 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of count) {
            console.log(num, freq);
            buckets[freq].push(num);
        }

        const results = [];
        for (let x = buckets.length - 1; x >= 0 && results.length < k; x--) {
            results.push(...buckets[x]);
        }

        return results;
    }
}
