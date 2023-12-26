function solution(arr, queries) {
    for (const query of queries) {
        const [i, j] = query;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // i와 j의 값 서로 바꾸기
    }
    return arr;
}
