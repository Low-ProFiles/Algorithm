// 문자열을 정수로 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/12925

function solution(s) {
    let arr = s.split("");
    let answer = "";
    if (arr[0] === "-") {
        arr.forEach((e) => (answer += e));
        return Number(answer);
    } else {
        arr.forEach((e) => (answer += e));
        return Number(answer);
    }
}