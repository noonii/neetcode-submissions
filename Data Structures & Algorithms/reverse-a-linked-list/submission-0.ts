/**
 * Definition for singly-linked list.
 */
// class ListNode {
//     val: number;
//     next: ListNode;

//     constructor(val: number = 0, next: ListNode = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev = null;
        let curr = head;

        while (curr) {
            // remember where rest of the list is
            const temp = curr.next;
            // flip arrow link backwards
            // 0.next -> 1 to 0.next -> null
            curr.next = prev;
            // move prev forward
            prev = curr;
            // move curr forward
            curr = temp;
        }

        return prev;
    }
}
