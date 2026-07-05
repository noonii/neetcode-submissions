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
        if (!root) return null;

        return this.dfs(root, k);
    }

    dfs(root: TreeNode, k: number): number {
        const stack = [root];
        let top = 1;
        let node = root;


        while (node !== null || top > 0) {
            // Go as far left as possible
            while (node !== null) {
                stack[top++] = node;
                node = node.left;
            }

            node = stack[--top];
            k--;
            if (k === 0) {
                return node.val;
            }

            // Move node to right
            node = node.right;
        }

        return -1;
    }
}
