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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if (!lists || !Array.isArray(lists) || !lists.length) return null;

        while (lists.length > 1) {
            const mergedLists = [];
            for (let x = 0; x < lists.length; x += 2) {
                const l1 = lists[x];
                const l2 = x + 1 < lists.length ? lists[x + 1] : null;
                mergedLists.push(this.mergeLists(l1, l2));
            }
            lists = mergedLists;
        }

        return lists[0];
    }

    /**
     * Input:
     *  l1 [1,2,4]
     *  l2 [1,3,5]
     * Output:
     *  [1,1,2,3,4,5]
     */
    mergeLists(l1: ListNode, l2: ListNode): ListNode {
        const dummy = new ListNode(0);
        let tail = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 || l2;

        return dummy.next;
    }
}
