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
        if (!root) return 0;

        const res: [count: number, kth: number] = [0, null];

        this.dfs(root, k, res);

        return res[1];
    }

    dfs(node: TreeNode, k: number, res: number[]): void {
        if (!node || res[1] !== null) return;

        this.dfs(node.left, k, res);

        if (res[1] !== null) return;
        res[0]++;
        if (res[0] === k) {
            res[1] = node.val;
            return;
        }

        this.dfs(node.right, k, res);
    }
}
