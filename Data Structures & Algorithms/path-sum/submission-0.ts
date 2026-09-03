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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (!root) return false;

        targetSum -= root.val;

        if (!root.left && !root.right) {
            return targetSum === 0;
        }

        return this.hasPathSum(root.left, targetSum) || this.hasPathSum(root.right, targetSum);
    }
}
