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
        return this.bfs(root, targetSum);
    }

    bfs(root: TreeNode, targetSum: number): boolean {
        const queue: [TreeNode, number][] = [[root, targetSum]];
        let front = 1;

        /**
         *          1
         *        .   .
         *      1       0
         *    .
         *  1
         */
        while (front > 0) {
            const el = queue[--front];
            const node = el[0];
            let sum = el[1];

            sum -= node.val;

            if (!node.left && !node.right && sum === 0) {
                return true;
            }

            if (node.left) queue[front++] = [node.left, sum];
            if (node.right) queue[front++] = [node.right, sum];
        }

        return false;
    }
}
