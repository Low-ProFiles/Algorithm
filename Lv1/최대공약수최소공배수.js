// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    const new_n = (a, b) => {
        if (b === 0) {
            return a;
        } else {
            return new_n(b, a % b);
        }
    };
    const new_m = (a, b) => (a * b) / new_n(a, b);
    return [new_n(n, m), new_m(n, m)];
}
