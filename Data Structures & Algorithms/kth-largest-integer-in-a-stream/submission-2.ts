class KthLargest {
    nums: number[];
    k: number;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums.sort((a, b) => b - a);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.nums.push(val);
        this.nums.sort((a, b) => b - a);
        return this.nums[this.k - 1];
    }
}
