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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        const dummy = new ListNode();

        let curr = dummy;
        let carry = 0;

        while (carry || l1 || l2) {
            const a = l1 ? l1.val : 0;
            const b = l2 ? l2.val : 0;
            const sum = a + b + carry;

            carry = Math.floor(sum / 10);

            curr.next = new ListNode(sum % 10);

            curr = curr.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}
