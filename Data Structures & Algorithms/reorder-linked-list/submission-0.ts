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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head || !head.next) return;

        // [2, 4, 6, 8]
        // [2, n-1, 4, n-2]
        // n-1 = 8
        // n-2 = 6
        // [2, 8, 4, 6]

        // Step 1: Split list into l1 and l2
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next!;
            fast = fast.next.next;
        }

        // splitting list [2, 4] and [6, 8]
        // Step 2: Reverse l2
        let second = slow.next;
        slow.next = null;
        second = this.reverseList(second);

        // Step 3: Merge l1 and l2
        let first = head;

        while (second) {
            const firstNext = first!.next;
            const secondNext = second.next;

            first!.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }

    reverseList(head: ListNode | null): ListNode | null {
        let prev = null;
        let curr = head;

        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
