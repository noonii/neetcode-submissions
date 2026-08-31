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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (!root) return null;

        //         4
        //       .   .
        //      1      n
        //    .   .
        //   2     n
        //  .
        // 3

        root = this.swap(root);

        if (root.left) {
            root.left = this.invertTree(root.left)
        }

        if (root.right) {
            root.right = this.invertTree(root.right);
        }

        return root;
    }

    swap(root: TreeNode | null): TreeNode {
        const temp = root.left;
        root.left = root.right;
        root.right = temp;
        return root;
    }
}
