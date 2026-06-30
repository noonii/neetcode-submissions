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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (!root) return true;

        const stack = [root];
        const states = [0];
        const leftHeights = [0];
        const rightHeights = [0];

        let top = 1;

        while (top > 0) {
            const i = top - 1;
            let node = stack[i];

            if (states[i] === 0) {
                // Add left node
                states[i] = 1;
                if (node.left) {
                    stack[top] = node.left;
                    states[top] = 0;
                    leftHeights[top] = 0;
                    rightHeights[top] = 0;
                    top++;
                }
            } else if (states[i] === 1) {
                // Add right node
                states[i] = 2;
                if (node.right) {
                    stack[top] = node.right;
                    states[top] = 0;
                    leftHeights[top] = 0;
                    rightHeights[top] = 0;
                    top++;
                }
            } else {
                // Calculate
                const left = leftHeights[i];
                const right = rightHeights[i];

                const diff = left > right ? left - right : right - left;
                if (diff > 1) {
                    return false;
                }

                const height = 1 + (right > left ? right : left);

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

        return true;
    }
}
