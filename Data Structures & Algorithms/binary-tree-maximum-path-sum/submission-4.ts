/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        if (!root) return 0;

        const res = [root.val];

        const leftGain = Math.max(0, this.maxGain(root.left, res));
        const rightGain = Math.max(0, this.maxGain(root.right, res));
        const path = root.val + leftGain + rightGain;

        if (path > res[0]) {
            res[0] = path;
        }

        return res[0];
    }

    maxGain(root: TreeNode, res: number[]): number {
        if (!root) return 0;

        const left = Math.max(0, this.maxGain(root.left, res));
        const right = Math.max(0, this.maxGain(root.right, res));
        const path = root.val + left + right;
        
        if (path > res[0]) {
            res[0] = path;
        }

        return root.val + Math.max(left, right);
    }
}
