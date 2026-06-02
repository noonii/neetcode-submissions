class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const output: number[] = [];
        const dq: number[] = [];
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            while (dq.length > 0 && nums[dq[dq.length - 1]] < nums[r]) {
                dq.pop();
            }

            dq.push(r);

            if (l > dq[0]) {
                dq.shift();
            }

            if (r + 1 >= k) {
                output.push(nums[dq[0]]);
                l++;
            }
        }

        return output;
    }
}
