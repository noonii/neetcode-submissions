class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        if (!nums || !nums.length) return [];

        const res: number[][] = [[]];

        for (const n of nums) {
            const size = res.length;
            for (let x = 0; x < size; x++) {
                res.push([...res[x], n]);
            }
        }

        return res;
    }
}
