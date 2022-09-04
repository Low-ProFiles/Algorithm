// 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    var list = [...phone_number];
    var alive = list.slice(list.length - 4, list.length);
    const backToArray = alive.join("");
    const star_length = list.length - backToArray.length;
    const answer = "*".repeat(star_length) + backToArray;
    return answer;
}