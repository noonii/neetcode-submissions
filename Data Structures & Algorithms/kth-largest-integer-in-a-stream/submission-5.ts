class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    get peek() {
        return this.heap[0];
    }

    get size() {
        return this.heap.length;
    }

    push(val: number) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number {
        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length < 1) {
            return last;
        }

        this.heap[0] = last;
        this.bubbleDown(0);

        return min;
    }

    private bubbleUp(index: number) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[index]) break;

            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;

            index = parentIndex;
        }
    }

    private bubbleDown(index: number) {
        const length = this.heap.length;
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            const temp = this.heap[smallest];
            this.heap[smallest] = this.heap[index];
            this.heap[index] = temp;

            index = smallest;
        }
    }
}
class KthLargest {
    private heap: MinHeap;
    private k: number;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = new MinHeap();

        for (const num of nums) {
            this.add(num);
        }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.push(val);

        if (this.heap.size > this.k) {
            this.heap.pop();
        }

        return this.heap.peek;
    }
}
