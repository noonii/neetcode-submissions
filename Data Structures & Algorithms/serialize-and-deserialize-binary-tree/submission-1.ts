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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        if (!root) return null;

        const stack: TreeNode[] = [root];
        const values: string[] = [];
        let top = 1;

        while (top > 0) {
            const node = stack[--top];
            if (!node) {
                values.push("n");
            } else {
                values.push(String(node.val));
                stack[top++] = node.right;
                stack[top++] = node.left;
            }
        }

        return values.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        if (!data || data === "") return null;
        if (data[0] === "n") return null;

        //1,2,n,n,3,4,n,n,5,n,n
        const values = data.split(",");
        const root = new TreeNode(Number(values[0]));
        const stack = [root];
        const state = [0];
        let top = 1;
        let index = 1;

        while (top > 0 && index < values.length) {
            const i = top - 1;
            const node = stack[i];
            const nodeVal = values[index++];

            const child = nodeVal === "n" ? null : new TreeNode(Number(nodeVal));

            if (state[i] === 0) {
                node.left = child;
                state[i] = 1;
            } else {
                node.right = child;
                top--;
            }
            
            if (child) {
                stack[top] = child;
                state[top] = 0;
                top++;
            }
        }

        return root;
    }
}
