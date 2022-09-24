// 짝지어 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        !answer.length || answer[answer.length - 1] !== s[i]
            ? answer.push(s[i])
            : answer.pop();
    }

    return answer.length ? 0 : 1;
}