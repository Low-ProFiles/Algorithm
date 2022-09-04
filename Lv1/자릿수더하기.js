// 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    const str = n.toString().split("").reverse();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}