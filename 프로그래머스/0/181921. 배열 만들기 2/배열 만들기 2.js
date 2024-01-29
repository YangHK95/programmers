function solution(l, r) {
    const result = [];

    for (let i = l; i <= r; i++) {
        if (isZeroFiveNumber(i)) {
            result.push(i);
        }
    }

    return result.length > 0 ? result : [-1];
}

function isZeroFiveNumber(num) {
    while (num > 0) {
        const digit = num % 10;
        if (digit !== 0 && digit !== 5) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}