class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // count freq
        const count = new Map<number, number>();
        for (const n of nums) {
            count.set(n, (count.get(n) ?? 0) + 1);
        }

        // map by freq
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of count) {
            buckets[freq].push(num);
        }
        
        // walk down freq by k
        const results: number[] = [];
        for (let x = buckets.length - 1; x >= 0 && results.length < k; x--) {
            results.push(...buckets[x]);
        }

        return results;
    }
}
