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
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0;
        return this.bfs(root);
    }

    bfs(root: TreeNode): number {
        const queue = [root];
        const maxVals = [root.val];
        let front = 0;
        let tail = 1;
        let count = 0;

        while (front < tail) {
            const node = queue[front];
            const max = maxVals[front];
            front++;

            if (node.val >= max) {
                count++;
            }

            if (node.left) {
                queue[tail] = node.left;
                maxVals[tail] = Math.max(max, node.val);
                tail++;
            }

            if (node.right) {
                queue[tail] = node.right;
                maxVals[tail] = Math.max(max, node.val);
                tail++;
            }
        }

        return count;
    }
}
