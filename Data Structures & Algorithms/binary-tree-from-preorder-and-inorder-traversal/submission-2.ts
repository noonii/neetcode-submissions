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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        if (!preorder || !inorder) return null;
        if (!preorder.length || !inorder.length) return null;
        return this.dfs(preorder, inorder);
    }

    /**
     * preorder: root -> left -> right
     * inorder:  left -> root -> right
     *
     * Stack tracks the path of nodes whose right child might not be attached yet.
     */
    dfs(preorder: number[], inorder: number[]): TreeNode {
        const root = new TreeNode(preorder[0]);
        const stack: TreeNode[] = [root];
        let top = 1;
        let inIndex = 0;

        // Start at 1 because preorder[0] was already used to create root.
        for (let x = 1; x < preorder.length; x++) {
            const nodeVal = preorder[x];
            const node = new TreeNode(nodeVal);

            let parent = stack[top - 1];

            // If stack top is not the next inorder value,
            // we are still walking down the left side.
            if (parent.val !== inorder[inIndex]) {
                parent.left = node;
            } else {
                // If stack top matches inorder[inIndex],
                // that node's left side is complete.
                // Keep popping completed nodes.
                while (top > 0 && stack[top - 1].val === inorder[inIndex]) {
                    parent = stack[--top];
                    inIndex++;
                }

                // The next preorder node belongs as the right child
                // of the last completed parent.
                parent.right = node;
            }

            // This new node may later receive children,
            // so push it onto the stack.
            stack[top++] = node;
        }

        return root;
    }
}
