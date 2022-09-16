// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    const arr = s.split(" ");
    return `${arr.sort((a, b) => a - b)[0]} ${arr.sort((a, b) => a - b).pop()}`;
}