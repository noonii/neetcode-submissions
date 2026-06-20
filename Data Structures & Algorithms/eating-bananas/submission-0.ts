class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        // handle negative test cases
        if (!Array.isArray(piles) || !piles.length) return -1;
        if (isNaN(h) || h <= 0) return -1;

        piles.sort((a,b) => a-b);

        let minEatSpeed = piles[piles.length - 1];
        let l = 0;
        let r = minEatSpeed;

        while (l <= r) {
            const k = Math.floor((r + l) / 2);
            
            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }

            if (totalTime <= h) {
                minEatSpeed = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }

        return minEatSpeed;
    }
}
