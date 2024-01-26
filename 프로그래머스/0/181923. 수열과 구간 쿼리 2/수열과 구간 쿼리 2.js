function solution(arr, queries) {
    const result = [];

    for (const query of queries) {
        const [start, end, k] = query;
        let minGreater = Infinity;

        for (let i = start; i <= end; i++) {
            if (arr[i] > k && arr[i] < minGreater) {
                minGreater = arr[i];
            }
        }

        result.push(minGreater === Infinity ? -1 : minGreater);
    }

    return result;
}