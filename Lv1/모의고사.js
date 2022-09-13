// 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    let answer = [];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        if (first[i % 5] === answers[i]) result[0]++;
        if (second[i % 8] === answers[i]) result[1]++;
        if (third[i % 10] === answers[i]) result[2]++;
    }
    let index = result.indexOf(Math.max(...result));
    while (index !== -1) {
        answer.push(index + 1);
        index = result.indexOf(Math.max(...result), index + 1);
    }
    return answer.sort((a, b) => a - b);
}