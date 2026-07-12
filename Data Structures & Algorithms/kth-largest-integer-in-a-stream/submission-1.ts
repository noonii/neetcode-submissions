class MinHeap {
    heap: number[];

    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek(): number {
        return this.heap[0];
    }

    push(val: number): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number {
        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return min;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) {
                break;
            }
            const temp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = temp;
            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            const left = index * 2 + 1;
            const right = index * 2 + 2;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            const temp = this.heap[index];
            this.heap[index] = this.heap[smallest];
            this.heap[smallest] = temp;

            index = smallest;
        }
    }
}

class KthLargest {
    k: number;
    minHeap: MinHeap;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.minHeap = new MinHeap();
        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.push(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.pop();
        }
        return this.minHeap.peek();
    }
}
