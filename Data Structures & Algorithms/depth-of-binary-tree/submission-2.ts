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
        return this.dfs(root);
    }

    dfs(root: TreeNode | null): number {
        if (!root) return 0;

        const stack: Array<[TreeNode, number]> = [[root, 1]];
        let res = 1;

        while (stack.length > 0) {
            const entry = stack.pop();
            const node = entry[0];
            const depth = entry[1];

            res = Math.max(res, depth);
            if (node.left) stack.push([node.left, depth + 1]);
            if (node.right) stack.push([node.right, depth + 1]);
        }

        return res;
    }
}
