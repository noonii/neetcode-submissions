class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x: number): number {
        const MIN = -(2 ** 31);
        const MAX = 2 ** 31 - 1;

        let res = 0;

        while (x !== 0) {
            const digit = x % 10;
            x = Math.trunc( x / 10);

            if (res > MAX / 10 || (res === MAX / 10 && digit > MAX % 10)) {
                return 0;
            }

            if (res < MIN / 10 || (res === MIN / 10 && digit < MIN % 10)) {
                return 0;
            }

            res = res * 10 + digit;
        }

        return res;
    }
}
