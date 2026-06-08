class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<number, Set<string>>();
        const cols = new Map<number, Set<string>>();
        const sq = new Map<number, Set<string>>();

        const addOrFail = (map: Map<number, Set<string>>, index: number, val: string): boolean => {
            const set = map.get(index);

            if (!set) {
                map.set(index, new Set());
            }

            if (map.get(index).has(val)) {
                return false;
            }

            map.get(index).add(val);
            return true;
        };

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const val = board[r][c];
                if (val === ".") continue;

                if (
                    !addOrFail(rows, r, val) ||
                    !addOrFail(cols, c, val) ||
                    !addOrFail(sq, Math.floor(r / 3) * 3 + Math.floor(c / 3), val)
                ) {
                    return false;
                }
            }
        }

        return true;
    }
}
