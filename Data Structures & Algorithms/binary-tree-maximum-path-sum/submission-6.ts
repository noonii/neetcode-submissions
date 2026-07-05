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
        this.dfs(root, res);
        return res[0];
    }

    dfs(root: TreeNode, res: number[]): number {
        if (!root) return 0;

        const left = Math.max(0, this.dfs(root.left, res));
        const right = Math.max(0, this.dfs(root.right, res));
        const path = root.val + left + right;

        if (path > res[0]) {
            res[0] = path;
        }

        return root.val + Math.max(left, right);
    }
}
