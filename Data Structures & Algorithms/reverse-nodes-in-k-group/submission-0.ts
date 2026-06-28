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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            let start = groupPrev.next;
            let end = groupPrev;

            // Find kth node from groupPrev.
            for (let x = 0; x < k; x++) {
                end = end.next;
                if (end === null) {
                    return dummy.next;
                }
            }

            const groupNext = end.next;

            // Reverse from start through end.
            this.reverseList(start, end);

            // After reversal:
            // end is the new head of this group.
            // start is the new tail of this group.
            groupPrev.next = end;
            start.next = groupNext;

            // Move groupPrev to the tail of the reversed group.
            groupPrev = start;
        }
    }

    reverseList(head: ListNode | null, tail: ListNode | null): ListNode {
        const stop = tail.next;

        let curr = head;
        let prev = stop;

        while (curr !== stop) {
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        return prev;
    }
}
