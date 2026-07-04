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
        return this.dfs(root);
    }

    dfs(root: TreeNode): boolean {
        const stack = [root];
        const min = [-Infinity];
        const max = [Infinity];
        let top = 1;

        while (top > 0) {
            top--;

            const node = stack[top];
            const minVal = min[top];
            const maxVal = max[top];

            if (node.val <= minVal || node.val >= maxVal) {
                return false;
            }

            if (node.left) {
                stack[top] = node.left;
                min[top] = minVal;
                max[top] = node.val;
                top++;
            }

            if (node.right) {
                stack[top] = node.right;
                min[top] = node.val;
                max[top] = maxVal;
                top++;
            }
        }

        return true;
    }
}
