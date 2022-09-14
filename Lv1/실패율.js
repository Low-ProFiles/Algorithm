// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    let answer = [];
    let people = stages.length;
    for (let i = 1; i <= N + 1; i++) {
        let tempAnswer = stages.filter((n) => n === i).length;
        answer.push([i, tempAnswer / people]);
        people -= tempAnswer;
    }
    answer.pop();
    answer = answer.sort((a, b) => b[1] - a[1]);
    return answer.map((a) => a[0]);
}