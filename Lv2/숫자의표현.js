// 숫자의 표현
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) {
            count += 1
        }
    }
    return count
}