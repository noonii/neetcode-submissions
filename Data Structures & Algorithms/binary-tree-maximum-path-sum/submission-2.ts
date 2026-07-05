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
        if (!root.left && !root.right) return root.val;
        return this.dfs(root);
    }

    /**
     * [1,-2,3]
     */
    dfs(root: TreeNode): number {
        const stack = [];
        const gain = new Map<TreeNode, number>();
        let top = 0;
        let max = -Infinity;

        let curr = root;
        let lastVisited: TreeNode | null = null;

        while (top > 0 || curr) {
            // Go deep left
            while (curr) {
                stack[top++] = curr;
                curr = curr.left;
            }
            
            // First root, second left nodes, then right
            const node = stack[top - 1];
            
            if (node.right && lastVisited !== node.right) {
                curr = node.right;
                continue;
            }
            
            top--;

            const leftGain = Math.max(0, gain.get(node.left) ?? 0);
            const rightGain = Math.max(0, gain.get(node.right) ?? 0);
            const path = node.val + leftGain + rightGain;
            
            if (path > max) {
                max = path;
            }

            gain.set(node, node.val + Math.max(leftGain, rightGain));

            lastVisited = node;
        }

        return max;
    }
}
