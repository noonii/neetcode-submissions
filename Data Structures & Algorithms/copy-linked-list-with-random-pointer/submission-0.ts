// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) return null;

        let curr = head;
        while (curr) {
            const copy = new Node(curr.val)
            copy.next = curr.next;
            curr.next = copy;
            curr = copy.next;
        }

        const newHead = head.next;

        curr = head;
        while (curr) {
            if (curr.random) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        curr = head;
        while (curr) {
            const temp = curr.next;
            curr.next = temp.next;
            if (temp.next) {
                temp.next = temp.next.next;
            }
            curr = curr.next;
        }

        return newHead;
    }
}
