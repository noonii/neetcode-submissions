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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        const bucket = [];

        const dfs = (node: TreeNode, level: number) => {
            if (!node) return;

            if (bucket.length === level) {
                bucket.push([]);
            }

            bucket[level].push(node.val);
            dfs(node.left, level + 1);
            dfs(node.right, level + 1);
        };

        dfs(root, 0);

        return bucket;
    }
}
