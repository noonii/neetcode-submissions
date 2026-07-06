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
        if (!root) return "";

        const arr: string[] = [String(root.val)];
        const queue = [root];
        let front = 0;
        let tail = 1;

        while (front < tail) {
            const node = queue[front++];

            if (node.left) {
                queue[tail++] = node.left;
                arr.push(String(node.left.val));
            } else {
                arr.push("n");
            }

            if (node.right) {
                queue[tail++] = node.right;
                arr.push(String(node.right.val));
            } else {
                arr.push("n");
            }
        }

        return arr.map((str) => `${str.length}#${str}`).join("");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        if (!data || data === "") return null;

        const nodes: Array<TreeNode | null> = [];

        /** Deserializing string */
        let i = 0;
        while (i < data.length) {
            let len = 0;

            // Parse the numeric length directly instead of slicing + parseInt.
            while (data.charCodeAt(i) !== 35) {
                len = len * 10 + data.charCodeAt(i) - 48; // '0'
                i++;
            }

            i++; // skip '#'

            const str = data.slice(i, i + len);
            nodes.push(new TreeNode(str === "n" ? null : Number(str)));

            i += len; // move cursor
        }

        /**
         * Creating tree
         */
        const root = nodes[0];
        if (!root) return null;

        const queue = [root];
        let front = 0;
        let tail = 1;
        let cursor = 1;

        while (front < tail && cursor < nodes.length) {
            const node = queue[front++];

            const left = nodes[cursor++];
            if (left) {
                node.left = left;
                queue[tail++] = node.left;
            }

            const right = nodes[cursor++];
            if (right) {
                node.right = right;
                queue[tail++] = node.right;
            }
        }

        return root;
    }
}
