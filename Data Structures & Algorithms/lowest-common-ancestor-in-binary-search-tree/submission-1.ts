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
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ): TreeNode | null {
        if (!root || !q || !p) return null;

        const [lo, hi] = p.val > q.val ? [q.val, p.val] : [p.val, q.val];
        let curr = root;

        while (curr) {
            if (curr.val < lo) {
                curr = curr.right;
            } else if (curr.val > hi) {
                curr = curr.left;
            } else {
                return curr;
            }
        }

        return null;
    }
}
