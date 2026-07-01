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
        
        return this.dfs(root, subRoot);
    }

    dfs(root: TreeNode, subRoot: TreeNode): boolean {
        if (!subRoot) return true;
        if (!root) return false;
        const stack = [root];
        let top = 1;

        while (top > 0) {
            top--;

            const node = stack[top];

            if (node.val === subRoot.val && this.sameTree(node, subRoot)) {
                return true;
            }

            if (node.left) stack[top++] = node.left;
            if (node.right) stack[top++] = node.right;
        }

        return false;
    }

    sameTree(a: TreeNode, b: TreeNode): boolean {
        if (!a && !b) return true;

        const aStack = [a];
        const bStack = [b];
        let top = 1;

        while (top > 0) {
            top--;

            const aNode = aStack[top];
            const bNode = bStack[top];

            // validate
            if (!aNode && !bNode) continue;
            if (!aNode || !bNode) return false;
            if (aNode.val !== bNode.val) return false;

            // add to stack
            aStack[top] = aNode.left;
            bStack[top] = bNode.left;
            top++;

            aStack[top] = aNode.right;
            bStack[top] = bNode.right;
            top++;
        }

        return true;
    }
}
