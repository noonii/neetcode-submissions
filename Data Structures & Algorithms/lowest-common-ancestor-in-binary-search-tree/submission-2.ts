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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
        if (!root || !p || !q) return null;

        if (root.val < Math.min(p.val, q.val)) {
            return this.lowestCommonAncestor(root.right, p, q);
        } else if (root.val > Math.max(p.val, q.val)) {
            return this.lowestCommonAncestor(root.left, p, q);
        } else {
            return root;
        }
    }
}
