class Solution {
    searchMatrix(matrix: number[][], target: number): boolean {
        // handle the negatives
        if (!matrix?.length || isNaN(target)) return false;

        let ROWS = matrix.length; // i
        let COLS = matrix[0].length; // 4 every i

        let l = 0;
        let r = ROWS * COLS - 1;

        while (l <= r) {
            const mid = Math.floor((r+l) / 2);
            const row = Math.floor(mid / COLS);
            const col = mid % COLS;
            const val = matrix[row][col];

            if (val < target) {
                l = mid + 1;
            } else if (val > target) {
                r = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
