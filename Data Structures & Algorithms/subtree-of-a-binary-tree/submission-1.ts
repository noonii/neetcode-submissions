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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!subRoot) return true;
        if (!root) return false;

        return this.bfs(root, subRoot);
    }

    bfs(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        const queue: TreeNode[] = [root];
        let front = 0;
        let tail = 1;

        while (front < tail) {
            const node = queue[front++];

            if (node.val === subRoot.val && this.sameTree(node, subRoot)) {
                return true;
            }

            if (node.left) queue[tail++] = node.left;
            if (node.right) queue[tail++] = node.right;
        }

        return false;
    }

    sameTree(a: TreeNode, b: TreeNode): boolean {
        const aQueue: TreeNode[] = [a];
        const bQueue: TreeNode[] = [b];

        let front = 0;
        let tail = 1;

        while (front < tail) {
            const aNode = aQueue[front];
            const bNode = bQueue[front];
            front++;

            // validate
            if (!aNode && !bNode) continue;
            if (!aNode || !bNode) return false;
            if (aNode.val !== bNode.val) return false;

            // add to queue
            aQueue[tail] = aNode.left;
            bQueue[tail] = bNode.left;
            tail++;

            aQueue[tail] = aNode.right;
            bQueue[tail] = bNode.right;
            tail++;
        }

        return true;
    }
}
