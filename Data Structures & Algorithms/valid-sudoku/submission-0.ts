class Solution {
    addOrFail(map: Map<number, Set<string>>, index: number, value: string): boolean {
        if (!map.has(index)) map.set(index, new Set());

        const set = map.get(index)!;

        if (set.has(value)) {
            return false; // fail
        }

        set.add(value);
        return true;
    }

    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowMap = new Map<number, Set<string>>();
        const colMap = new Map<number, Set<string>>();
        const sqMap = new Map<number, Set<string>>();

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const val = board[r][c];

                if (val === ".") continue; // skip

                if (!this.addOrFail(rowMap, r, val)) return false;
                if (!this.addOrFail(colMap, c, val)) return false;

                const sqIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if (!this.addOrFail(sqMap, sqIndex, val)) return false;
            }
        }

        return true;
    }
}
