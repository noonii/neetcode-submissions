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

        const nums: string[] = [];

        //bfs
        const queue = [root];
        while (queue.length > 0) {
            const node = queue.shift();
            if (!node) {
                nums.push("n");
            } else {
                nums.push(String(node.val));
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        return nums.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        if (!data) return null;
        if (data[0] === "n") return null;

        const strs = data.split(",");
        const root = new TreeNode(Number(strs[0]));
        const queue = [root];
        let cursor = 1;

        /**
        * ['1', '2', '3', '4','5', '6', '7', 'n','n', 'n', 'n', 'n','n', 'n', 'n']
        *                  1
                        .     .
                      2         3
                    .   .     .   .
                   4     5   6     7
        */
        while (queue.length > 0) {
            const node = queue.shift();

            const left = strs[cursor++];
            if (left && left !== "n") {
                node.left = new TreeNode(Number(left));
                queue.push(node.left);
            }

            const right = strs[cursor++];
            if (right && right !== "n") {
                node.right = new TreeNode(Number(right));
                queue.push(node.right);
            }
        }

        return root;
    }
}
