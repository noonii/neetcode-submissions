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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];

        return this.bfs(root);
    }

    // Let's do BFS because we want to know quickly whether the view is obstructed RTL
    bfs(root: TreeNode): number[] {
        const res: number[] = [];
        const queue = [root];
        let front = 0;
        let tail = 1;

        while (front < tail) {
            const levelSize = tail - front;
            let rightSide: TreeNode | null = null;

            // validate
            for (let x = 0; x < levelSize; x++) {
                const node = queue[front++];

                if (node) {
                    rightSide = node;
                    queue[tail++] = node.left;
                    queue[tail++] = node.right;
                }
            }

            if (rightSide) {
                res.push(rightSide.val);
            }
        }

        return res;
    }
}
