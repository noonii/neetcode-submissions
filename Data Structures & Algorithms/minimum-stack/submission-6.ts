class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        const min = this.getMin();
        this.minStack.push(isNaN(min) ? val : Math.min(min, val));
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
