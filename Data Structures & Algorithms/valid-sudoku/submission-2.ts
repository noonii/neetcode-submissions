class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const row = new Map<number, Set<string>>();
        const col = new Map<number, Set<string>>();
        const sq = new Map<number, Set<string>>();

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const cell = board[r][c];

                if (cell === ".") continue;

                const colSet = col.get(c);
                if (!colSet) col.set(c, new Set(cell));
                else if (colSet.has(cell)) return false;
                else colSet.add(cell);

                const rowSet = row.get(r);
                if (!rowSet) row.set(r, new Set(cell));
                else if (rowSet.has(cell)) return false;
                else rowSet.add(cell);

                const sqKey = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                const sqSet = sq.get(sqKey);
                if (!sqSet) sq.set(sqKey, new Set(cell));
                else if (sqSet.has(cell)) return false;
                else sqSet.add(cell);
            }
        }

        return true;
    }
}
