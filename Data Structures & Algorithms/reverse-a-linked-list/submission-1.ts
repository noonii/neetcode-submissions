/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev = null;
        let curr = head;

        // 0 -> 1 -> 2 -> 3
        while (curr) {
            const temp = curr.next; // 1 -> 2 -> 3

            curr.next = prev; // null <- 0

            prev = curr;

            curr = temp;
        }

        return prev;
    }
}
