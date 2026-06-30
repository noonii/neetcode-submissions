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
        const queue: Array<[TreeNode, TreeNode]> = [[p, q]];
        let front = 0;

        while (front < queue.length) {
            const pair = queue[front++];
            const p = pair[0];
            const q = pair[1];

            if (!p && !q) continue;
            if (!p || !q) return false;
            if (p.val !== q.val) return false;

            queue.push([p.left, q.left]);
            queue.push([p.right, q.right]);
        }

        return true;
    }
}
