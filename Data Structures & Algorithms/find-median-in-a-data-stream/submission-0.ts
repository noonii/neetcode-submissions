class Heap {
    private data: number[];
    private priority: (a: number, b: number) => boolean;

    constructor(priority: typeof this.priority) {
        this.data = [];
        this.priority = priority;
    }

    get peek() {
        return this.data[0];
    }

    get size() {
        return this.data.length;
    }

    /**
     *      1
     *    .   .
     *   2      3
     */
    push(value: number): void {
        this.data.push(value);

        let i = this.data.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (!this.priority(this.data[i], this.data[parent])) {
                break;
            }

            const temp = this.data[parent];
            this.data[parent] = this.data[i];
            this.data[i] = temp;

            i = parent;
        }
    }

    pop(): number {
        const root = this.data[0];
        const last = this.data.pop();

        if (this.data.length === 0) {
            return root;
        }

        this.data[0] = last;
        let i = 0;

        while (true) {
            const left = i * 2 + 1;
            const right = i * 2 + 2;
            let best = i;

            if (left < this.data.length && this.priority(this.data[left], this.data[best])) {
                best = left;
            }

            if (right < this.data.length && this.priority(this.data[right], this.data[best])) {
                best = right;
            }

            if (best === i) break;

            const temp = this.data[best];
            this.data[best] = this.data[i];
            this.data[i] = temp;

            i = best;
        }

        return root;
    }
}

class MedianFinder {
    private small: Heap;
    private large: Heap;

    constructor() {
        this.small = new Heap((a, b) => a > b);
        this.large = new Heap((a, b) => a < b);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        if (this.small.size === 0 || num <= this.small.peek) {
            this.small.push(num);
        } else {
            this.large.push(num);
        }

        if (this.small.size > this.large.size + 1) {
            this.large.push(this.small.pop());
        } else if (this.large.size > this.small.size) {
            this.small.push(this.large.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if (this.small.size > this.large.size) {
            return this.small.peek;
        }

        if (this.large.size > this.small.size) {
            return this.large.peek;
        }

        return (this.small.peek + this.large.peek) / 2.0;
    }
}
