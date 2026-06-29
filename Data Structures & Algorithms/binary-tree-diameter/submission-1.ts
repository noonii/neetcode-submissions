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
    diameterOfBinaryTree(root: TreeNode | null): number {
        return this.dfs(root);
    }

    /**
     * Use parallel array approach for optimal constant in time complexity
     * Time: O(n)
     * Space: O(n) worst case
     */
    dfs(root: TreeNode | null): number {
        if (!root) return 0;

        const stack: TreeNode[] = [root];
        // 0 = handle left case, 1 = handle right case, 2 = handle both
        const states = [0];
        const leftHeights = [0];
        const rightHeights = [0];

        let top = 1;
        // leftHeight + rightHeight
        let diameter = 0;

        while (top > 0) {
            const i = top - 1;
            const node = stack[i];

            if (states[i] === 0) {
                states[i] = 1; // process right next
                if (node.left) {
                    stack[top] = node.left;
                    states[top] = 0;
                    leftHeights[top] = 0;
                    rightHeights[top] = 0;
                    top++;
                }
            } else if (states[i] === 1) {
                states[i] = 2; // process both next
                if (node.right) {
                    stack[top] = node.right;
                    states[top] = 0;
                    leftHeights[top] = 0;
                    rightHeights[top] = 0;
                    top++;
                }
            } else {
                const left = leftHeights[i];
                const right = rightHeights[i];

                const depth = left + right;
                if (depth > diameter) diameter = depth;

                const height = 1 + Math.max(left, right);

                top--;

                if (top > 0) {
                    const parentIndex = top - 1;

                    if (states[parentIndex] === 1) {
                        leftHeights[parentIndex] = height;
                    } else {
                        rightHeights[parentIndex] = height;
                    }
                }
            }
        }

        return diameter;
    }
}
