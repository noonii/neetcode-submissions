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

        let [first, second] = this.splitList(head);
        this.mergeList(first, this.reverseList(second));
    }

    splitList(head: ListNode | null): [ListNode, ListNode] {
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let first = head;
        let second = slow.next;
        slow.next = null;
        return [first, second];
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

    mergeList(first: ListNode | null, second: ListNode | null): ListNode | null {
        if (!first) return second;
        if (!second) return first;

        // Keep the original first node so we can return the head at the end.
        const mergedHead = first;

        // For reorder-list merging, the second list is usually shorter
        // or the same length, so we keep weaving nodes while second exists.
        while (first && second) {
            // Save the next nodes before changing any pointers.
            const nextFirst = first.next;
            const nextSecond = second.next;

            // Put the current second node right after the current first node.
            first.next = second;

            // If the first list is finished, stop here.
            // This prevents second.next from pointing to null unnecessarily,
            // and avoids moving first to null before the next loop.
            if (!nextFirst) {
                break;
            }

            // Connect the inserted second node back to the next first node.
            second.next = nextFirst;

            // Move both pointers forward to continue weaving.
            first = nextFirst;
            second = nextSecond;
        }

        // Return the original head of the merged list.
        return mergedHead;
    }
}
