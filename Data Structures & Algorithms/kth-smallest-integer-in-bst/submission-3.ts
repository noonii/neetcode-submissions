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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const res = new Int32Array(2);
        res[0] = k;
        this.dfs(root, res);
        return res[1];
    }

    dfs(node: TreeNode, res: Int32Array): void {
        if (!node || res[0] === 0) return;

        this.dfs(node.left, res);
        if (res[0] === 0) return;

        res[0]--;
        if (res[0] === 0) {
            res[1] = node.val;
            return;
        }

        this.dfs(node.right, res);
    }
}
