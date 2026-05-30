class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0;
        let r = height.length - 1;
        let maxL = height[l];
        let maxR = height[r];
        let res = 0;

        while (l < r) {
            if (maxL < maxR) {
                l++;
                maxL = Math.max(maxL, height[l])
                res += maxL - height[l];
            } else {
                r--;
                maxR = Math.max(maxR, height[r]);
                res += maxR - height[r];
            }
        }

        return res;
    }
}
