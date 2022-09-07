// 음양더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    let arr = [];
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            arr.push(absolutes[i]);
        } else {
            arr.push(absolutes[i] * -1);
        }
    }
    return arr.reduce((a, b) => a + b);
}