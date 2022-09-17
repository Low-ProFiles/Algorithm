// JadenCase 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    const temp = s.split(" ").map((e) => e.toLowerCase());
    let answer = "";
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].length > 0) {
            let a = temp[i][0].toUpperCase();
            let b = temp[i].slice(1, temp[i].length) + " ";
            answer += a + b;
        } else {
            answer += " ";
        }
    }
    return answer.slice(0, -1);
}