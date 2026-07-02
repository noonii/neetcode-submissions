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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];
        if (!root.left && !root.right) return [[root.val]];

        return this.bfs(root);
    }

    bfs(root: TreeNode): number[][] {
        const bucket: number[][] = [];
        const queue = [root];
        let front = 0;
        let tail = 1;

        while (front < tail) {
            const levelSize = tail - front;
            const level = [];

            for (let i = 0; i < levelSize; i++) {
                const node = queue[front++];

                level.push(node.val);

                if (node.left) queue[tail++] = node.left;
                if (node.right) queue[tail++] = node.right;
            }

            bucket.push(level);
        }

        return bucket;
    }
}
