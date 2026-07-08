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

        const values = [];
        const queue = [root];
        let front = 0;
        let tail = 1;

        while (front < tail) {
            const node = queue[front++];
            if (!node) {
                values.push("n");
            } else {
                values.push(node.val);
                queue[tail++] = node.left;
                queue[tail++] = node.right;
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

        const values = data.split(",");
        const root = new TreeNode(Number(values[0]));
        const queue = [root];
        let front = 0;
        let tail = 1;
        let index = 1;

        while (front < tail && index < values.length) {
            const node = queue[front++];

            const left = values[index++];
            if (left) {
                node.left = new TreeNode(left === "n" ? null : Number(left));
                queue[tail++] = node.left;
            }

            const right = values[index++];
            if (right) {
                node.right = new TreeNode(right === "n" ? null : Number(right));
                queue[tail++] = node.right;
            }
        }

        return root;
    }
}
