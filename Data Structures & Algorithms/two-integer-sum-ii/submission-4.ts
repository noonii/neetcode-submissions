class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        if (!numbers || !numbers.length || isNaN(target)) return [];
        
        let l = 0;
        let r = numbers.length - 1;

        while (l < r && l !== r) {
            const sum = numbers[l] + numbers[r];

            if (sum === target) {
                return [l + 1, r + 1];
            }

            if (sum < target) {
                l++;
            } else {
                r--;
            }
        }

        return [];
    }
}
