// 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    const sum = brown + yellow;
    for (let height = 3; height <= brown; height++) {
        if (sum % height === 0) {
            const width = sum / height;
            if ((height - 2) * (width - 2) === yellow) {
                return [width, height];
            }
        }
    }
}