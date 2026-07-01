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
        if (!p || !q) return false;
        if (p.val !== q.val) return false;

        // DFS parallel array
        const pStack: TreeNode[] = [p.left, p.right];
        const qStack: TreeNode[] = [q.left, q.right];

        let top = 2;

        while (top > 0) {
            top--;

            const pNode = pStack[top];
            const qNode = qStack[top];

            // Process
            if (!pNode && !qNode) continue;
            if (!pNode || !qNode) return false;
            if (pNode.val !== qNode.val) return false;

            // Add
            pStack[top] = pNode.left;
            qStack[top] = qNode.left;
            top++;

            pStack[top] = pNode.right;
            qStack[top] = qNode.right;
            top++;
        }

        return true;
    }
}
