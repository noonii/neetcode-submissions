class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set();
        let hasDupe = false;
        for (const num of nums) {
            if (seen.has(num)) {
                hasDupe = true;
                break;
            }
            seen.add(num);
        }
        return hasDupe;
    }
}
