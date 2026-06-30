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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q) return true;
        return this.bfs(p, q);
    }

    bfs(p: TreeNode | null, q: TreeNode | null): boolean {
        const qQueue: TreeNode[] = [q];
        const pQueue: TreeNode[] = [p];

        let front = 0;
        let tail = 1;

        while (front < tail) {
            const p = pQueue[front];
            const q = qQueue[front];

            front++;

            if (!p && !q) continue;
            if (!p || !q) return false;
            if (p.val !== q.val) return false;

            pQueue[tail] = p.left;
            qQueue[tail] = q.left;
            tail++;

            pQueue[tail] = p.right;
            qQueue[tail] = q.right;
            tail++;
        }

        return true;
    }
}
