interface Entry {
    value: string;
    timestamp: number;
}

class TimeMap {
    private keyStore: Map<string, Entry[]>;

    constructor() {
        this.keyStore = new Map();
    }

    private getValue(key: string): Entry[] | null {
        const entries = this.keyStore.get(key);

        if (!entries || !Array.isArray(entries) || !entries.length) {
            return undefined;
        }

        return entries;
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const entries = this.getValue(key);

        if (!entries) {
            this.keyStore.set(key, [{ value, timestamp }]);
            return;
        }

        entries.push({ value, timestamp });

        this.keyStore.set(key, entries);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const entries = this.getValue(key);
        
        if (!entries) return "";

        let l = 0;
        let r = entries.length - 1;
        let candidate: Entry;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const entry = entries[mid];

            // return exact index
            if (timestamp === entry.timestamp) {
                return entry.value;
            }

            if (entry.timestamp < timestamp) {
                l = mid + 1;
                candidate = entry;
            } else {
                r = mid - 1;
            }
        }

        return candidate?.value || "";
    }
}
