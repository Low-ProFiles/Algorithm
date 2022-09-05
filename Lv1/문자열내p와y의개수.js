// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
    let count_p = 0;
    let count_y = 0;
    for (let i = 0; i < s.length; i++) {
        const num = s[i].charCodeAt();
        if (num === 80 || num === 112) {
            count_p += 1;
        } else if (num === 89 || num === 121) {
            count_y += 1;
        }
    }
    return count_p === count_y ? true : false;
}