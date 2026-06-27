class ListNode {
    key: number;
    val: number;
    next: ListNode | null;
    prev: ListNode | null;

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
    }
}

class LRUCache {
    private capacity: number;
    private head: ListNode | null;
    private tail: ListNode | null;
    private store: Map<number, ListNode>;

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.store = new Map();
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.store.has(key)) return -1;

        const node = this.store.get(key);

        // Must move this node to most recent
        // which will push least recently used to the very back
        this.remove(node);
        this.insertAtHead(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        let node = this.store.get(key);

        if (node) {
            node.val = value;
            this.remove(node);
        } else {
            node = new ListNode(key, value);
            this.store.set(key, node);
        }

        this.insertAtHead(node);

        // Delete least recently used node (tail)
        if (this.store.size > this.capacity) {
            const lru = this.tail.prev;
            this.remove(lru);
            this.store.delete(lru.key);
        }
    }

    /**
     * Reassign [node]'s pointers to remove it
     * Example
     *  [HEAD] 1 <-> 2 <-> 3 [TAIL]
     *  Removing [2]
     */
    private remove(node: ListNode) {
        node.next.prev = node.prev; // 3 -> 1
        node.prev.next = node.next; // 1 -> 3
    }

    /**
     * Add node (2) to head (latest)
     * from HEAD 1 <-> 3 TAIL
     * to 2 <-> 1 <-> 3
     */
    private insertAtHead(node: ListNode) {
        // e.g. next is 1
        const next = this.head.next;
        // 0.next = 2
        this.head.next = node;
        // 2.prev = 0
        node.prev = this.head;
        // 2.next = 1
        node.next = next;
        // 1.prev = 2
        next.prev = node;
    }
}
