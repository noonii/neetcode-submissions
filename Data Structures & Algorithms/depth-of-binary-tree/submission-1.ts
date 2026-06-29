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
        return this.bfs(root);
    }

    bfs(root: TreeNode | null): number {
        if (!root) return 0;

        const queue: TreeNode[] = [root];
        let front = 0;
        let depth = 0;

        while (front < queue.length) {
            const lvlSize = queue.length - front;

            for (let x = 0; x < lvlSize; x++) {
                const node = queue[front++];
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            depth += 1;
        }

        return depth;
    }
}
