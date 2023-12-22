function solution(numLog) {
    let result = "";
    let currentNum = numLog[0];

    for (let i = 1; i < numLog.length; i++) {
        const diff = numLog[i] - numLog[i - 1];

        if (diff === 1) {
            result += "w";
            currentNum += 1;
        } else if (diff === -1) {
            result += "s";
            currentNum -= 1;
        } else if (diff === 10) {
            result += "d";
            currentNum += 10;
        } else if (diff === -10) {
            result += "a";
            currentNum -= 10;
        }
    }

    return result;
}

// 예제 입력
const numLog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1];

// 결과 출력
console.log(solution(numLog)); // "wsdawsdassw"