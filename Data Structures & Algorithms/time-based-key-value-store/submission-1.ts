class TimeMap {
    private keyStore: Map<string, Array<[value: string, timestamp: number]>>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const entries = this.keyStore.get(key);

        if (!entries || !Array.isArray(entries) || !entries.length) {
            return "";
        }

        let l = 0;
        let r = entries.length - 1;
        let result: string;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const [cachedValue, cachedTimestamp] = entries[mid];

            // return exact index
            if (timestamp === cachedTimestamp) {
                return cachedValue;
            }

            if (cachedTimestamp < timestamp) {
                l = mid + 1;
                result = cachedValue;
            } else {
                r = mid - 1;
            }
        }

        return result || "";
    }
}
