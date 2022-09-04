// 정수 제곱근 판별
// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let sqrt = Math.sqrt(n);
    if (sqrt % 1 === 0) {
        let result = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
        return result;
    } else {
        return -1;
    }
}