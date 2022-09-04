// 정수 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    const str = n.toString().split("");
    const strToArr = str.sort().reverse();
    const answer = Number(strToArr.join(""));
    return answer;
}