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
        return this.dfs(root);
    }

    /**
     * Parallel Array
     * Lower Constant Factor
     * Lower Overhead
     * Optimization
     */
    dfs(root: TreeNode): number {
        const nodes: TreeNode[] = [root];
        const leftGain: number[] = [0];
        const state: number[] = [0];

        let lastGain = 0;
        let max = -Infinity;
        let top = 1;

        while (top > 0) {
            const i = top - 1;
            const node = nodes[i];

            // Handle left
            if (state[i] === 0) {
                state[i] = 1;

                if (node.left) {
                    nodes[top] = node.left;
                    state[top] = 0;
                    leftGain[top] = 0;
                    top++;
                } else {
                    lastGain = 0;
                }
            
            // Handle right
            } else if (state[i] === 1) {
                state[i] = 2;

                const gain = lastGain > 0 ? lastGain : 0;
                leftGain[i] = gain;

                if (node.right) {
                    nodes[top] = node.right;
                    state[top] = 0;
                    leftGain[top] = 0;
                    top++;
                } else {
                    lastGain = 0;
                }

            } else {
                // Process left and right
                const left = leftGain[i];
                const right = lastGain > 0 ? lastGain : 0;
                const path = node.val + left + right;

                if (path > max) {
                    max = path;
                }

                lastGain = node.val + (left > right ? left : right)

                top--;
            }
        }

        return max;
    }
}
