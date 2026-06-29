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
    maxDepth(root: TreeNode | null): number {
        return this.optimalDFS(root);
    }

    optimalDFS(root: TreeNode | null): number {
        if (!root) return 0;

        const nodes: TreeNode[] = [root];
        const depths: number[] = [1];
        let top = 1;
        let max = 0;

        while (top > 0) {
            top--;

            const node = nodes[top];
            const depth = depths[top];

            max = Math.max(max, depth);

            const nextDepth = depth + 1;

            const left = node.left;
            if (left) {
                nodes[top] = left;
                depths[top] = nextDepth;
                top++;
            }

            const right = node.right;
            if (right) {
                nodes[top] = right;
                depths[top] = nextDepth;
                top++;
            }
        }

        return max;
    }
}
