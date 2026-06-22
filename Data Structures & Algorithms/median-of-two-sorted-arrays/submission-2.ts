class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        // optimization hack BECAUSE both are ascending order sorted
        // if (nums1[nums1.length - 1] < nums2[nums2.length - 1]) {
        //     const n = nums1.length + nums2.length; // [1,2,3]
        //     const isEven = n % 2 === 0;
        //     if (isEven) {
        //         return (nums1[nums1.length - 1] + nums2[0]) / 2;
        //     } else {
        //         return nums1.length > nums2.length ? nums1[nums1.length - 1] : nums2[0];
        //     }
        // }

        let a = nums1;
        let b = nums2;

        if (a.length > b.length) {
            [a, b] = [b, a];
        }

        const total = a.length + b.length;
        const half = Math.floor((total + 1) / 2);

        let l = 0;
        let r = a.length; // 4

        while (l <= r) {
            const takeA = Math.floor((r + l) / 2); // 2, 3
            const takeB = half - takeA; // 4, 3

            const aBefore = takeA === 0 ? -Infinity : a[takeA - 1]; // 2, 3
            const aAfter = takeA === a.length ? Infinity : a[takeA]; // 3, 4

            const bBefore = takeB === 0 ? -Infinity : b[takeB - 1]; // 4, 3
            const bAfter = takeB === b.length ? Infinity : b[takeB]; // 5, 4

            if (aBefore <= bAfter && bBefore <= aAfter) {
                const lowerMax = Math.max(aBefore, bBefore);

                if (total % 2 === 1) {
                    return lowerMax;
                }

                const upperMin = Math.min(aAfter, bAfter);
                return (lowerMax + upperMin) / 2; // (3+4)/2 = 3.5
            }

            if (aBefore > bAfter) {
                r = takeA - 1; // 
            } else {
                l = takeA + 1; // 3
            }
        }

        return -1;
    }
}
