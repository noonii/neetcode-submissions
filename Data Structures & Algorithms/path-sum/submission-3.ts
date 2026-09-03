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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (!root) return false;
        return this.iterativeDFS(root, targetSum);
    }

    iterativeDFS(root: TreeNode, targetSum: number): boolean {
        const stack = [root];
        const sums = [targetSum];
        let top = 1;

        while (top > 0) {
            --top;
            const node = stack[top];
            let sum = sums[top];

            sum -= node.val;

            if (!node.left && !node.right && sum === 0) {
                return true;
            }

            if (node.left) {
                stack[top] = node.left;
                sums[top] = sum;
                top++;
            }

            if (node.right) {
                stack[top] = node.right;
                sums[top] = sum;
                top++;
            }
        }

        return false;
    }
}
