class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names: string[], heights: number[]): string[] {
        const map = new Map<number, string>();

        for (let x = 0; x < heights.length; x++) {
            map.set(heights[x], names[x]);
        }

        heights.sort((a, b) => b - a);

        const res = [];
        for (const height of heights) {
            res.push(map.get(height));
        }

        return res;
    }
}
