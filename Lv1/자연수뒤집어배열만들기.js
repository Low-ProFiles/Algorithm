// 자연수 뒤집어 배열로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    const str = n.toString().split("").reverse();
    const answer = [];
    str.forEach((e) => answer.push(Number(e)));
    return answer;
}