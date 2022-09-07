// 내적
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        arr.push(a[i] * b[i]);
    }
    return arr.reduce((a, b) => a + b);
}