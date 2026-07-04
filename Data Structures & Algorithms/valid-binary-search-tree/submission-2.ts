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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        if (!root) return false;
        return this.bfs(root);
    }

    bfs(root: TreeNode): boolean {
        const queue = [root];
        const min = [-Infinity];
        const max = [Infinity];
        let front = 0;
        let tail = 1;

        while (front < tail) {
            const node = queue[front];
            const minVal = min[front];
            const maxVal = max[front];
            front++;

            if (node.val <= minVal || node.val >= maxVal) {
                return false;
            }

            if (node.left) {
                queue[tail] = node.left;
                min[tail] = minVal;
                max[tail] = node.val;
                tail++;
            }

            if (node.right) {
                queue[tail] = node.right;
                min[tail] = node.val;
                max[tail] = maxVal;
                tail++;
            }
        }

        return true;
    }
}
