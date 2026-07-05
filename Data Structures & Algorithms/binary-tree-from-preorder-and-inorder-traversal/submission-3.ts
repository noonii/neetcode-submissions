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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        if (!preorder || !inorder) return null;
        if (!preorder.length || !inorder.length) return null;

        let dummy = new TreeNode(null);
        let curr = dummy;
        let p = 0;
        let i = 0;
        let n = preorder.length;

        while (p < n && i < n) {
            /**
             * Use preorder to create the next root/right-subtree node,
             * but keep the temporary ancestor path alive.
             */
            curr.right = new TreeNode(preorder[p++], null, curr.right);
            curr = curr.right;

            /** Keep creating left children from preorder until
             * the current node matches the next node expected by inorder. */
            while (p < n && curr.val !== inorder[i]) {
                curr.left = new TreeNode(preorder[p++], null, curr);
                curr = curr.left;
            }

            // Advance inIndex because curr matched inorder[inIndex].
            i++;

            /** unwind completed ancestors using temporary right links */
            while (i < n && curr.right && curr.right.val === inorder[i]) {
                let prev = curr.right;
                curr.right = null;
                curr = prev;
                i++;
            }
        }

        return dummy.right;
    }
}
