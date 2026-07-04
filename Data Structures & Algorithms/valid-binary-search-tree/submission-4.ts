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
    isValidBST(root: TreeNode | null): boolean {
        if (!root) return true;
        return this.dfs(root, -Infinity, Infinity);
    }

    dfs(node: TreeNode, min: number, max: number): boolean {
        if (!node) return true;

        if (node.val <= min || node.val >= max) {
            return false;
        }

        return this.dfs(node.left, min, node.val) && this.dfs(node.right, node.val, max);
    }
}
