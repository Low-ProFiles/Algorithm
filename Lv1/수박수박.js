// 수박수박
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    let answer = "";
    if (n % 2 === 0) {
        answer = "수박".repeat(parseInt(n / 2));
    } else {
        answer = "수박".repeat(parseInt(n / 2)) + "수";
    }
    return answer
}