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
     * Preorder gives us the mapping node -> left -> right
     * inorder tells us the cut off between left and right order
     */
    dfs(preorder: number[], inorder: number[]): TreeNode {
        const root = new TreeNode(preorder[0]);
        const stack: TreeNode[] = [root];
        let top = 1;
        let inIndex = 0;

        for (let x = 1; x < preorder.length; x++) {
            const nodeVal = preorder[x];
            const node = new TreeNode(nodeVal);

            let parent = stack[top - 1];

            if (parent.val !== inorder[inIndex]) {
                parent.left = node;
            } else {
                while (top > 0 && stack[top - 1].val === inorder[inIndex]) {
                    parent = stack[--top];
                    inIndex++;
                }

                parent.right = node;
            }

            stack[top++] = node;
        }

        return root;
    }
}
