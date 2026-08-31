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

        const stack = [root];
        let top = 1;

        while (top > 0) {
            const node = stack[--top];

            const tmp = node.left;
            node.left = node.right;
            node.right = tmp;

            if (node.left) stack[top++] = node.left;
            if (node.right) stack[top++] = node.right;
        }

        return root;
    }
}
