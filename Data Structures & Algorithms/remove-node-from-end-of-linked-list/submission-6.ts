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

        return this.optimal(head, n);
    }

    /** Two pointer fast n slow */
    optimal(head: ListNode | null, n: number): ListNode | null {
        let fast = head;
        let slow = head;
        let prev = null;

        for (let x = 0; x < n; x++) {
            fast = fast.next;
        }

        while (fast) {
            fast = fast.next;
            prev = slow;
            slow = slow.next;
        }

        if (!prev) {
            return head.next;
        }
        
        // should remove n
        prev.next = slow.next;
        
        return head;
    }

    /**
     * Convert to Array then O(1) lookup index to remove O(1)
     * O(n) time - single linear loop
     * O(n) space - creating single 1D array to store nodes
     */
    bruteForce(head: ListNode | null, n: number): ListNode | null {
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
