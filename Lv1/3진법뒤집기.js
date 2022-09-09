// 3진법뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    let arr = [];
    const firstTry = n
        .toString(3)
        .split("")
        .reverse()
        .reduce((a, b) => a + b);
    for (let i = 0; i < firstTry.length; i++) {
        arr.push(Number(firstTry[i]) * 3 ** (firstTry.length - i - 1));
    }
    return arr.reduce((a, b) => a + b);
}