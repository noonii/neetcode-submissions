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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if (!head) return null;
        if (!n || n === 0) return head;
        if (n === 1 && !head.next) return null;

        // we'll try splitting the list where n is found, if it exists
        // then we'll break the link and merge the remainder
        return this.bruteForce(head, n);
    }

    bruteForce(head: ListNode | null, n: number): ListNode {
        // convert to array
        const arr = [];
        let curr = head;
        while (curr) {
            arr.push(curr);
            curr = curr.next;
        }

        const toRemove = arr[arr.length - n];
        if (toRemove) {
            if (arr.length === 1) {
                return null;
            }

            const prev = arr[arr.length - n - 1];
            if (prev) {
                prev.next = toRemove.next;
                toRemove.next = null;
            } else {
                return toRemove.next;
            }
        }

        return head;
    }
}
