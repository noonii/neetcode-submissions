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
        const stack: [TreeNode, number][] = [[root, 1]];
        let max = 0;

        while (stack.length > 0) {
            const el = stack.pop();
            const node = el[0];
            let level = el[1];

            if (node) {
                max = Math.max(max, level);
                stack.push([node.left, level + 1]);
                stack.push([node.right, level + 1]);
            }
        }

        return max;
    }
}
