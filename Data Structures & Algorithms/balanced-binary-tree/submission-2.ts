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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (!root) return true;

        const left = this.maxDepth(root.left);
        const right = this.maxDepth(root.right);

        if (Math.abs(left - right) > 1) return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    maxDepth(root: TreeNode): number {
        if (!root) return 0;
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }
}
