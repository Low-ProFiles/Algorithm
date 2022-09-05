// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    let arr = s.split("");
    if (s.length === 4 || s.length === 6) {
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i].charCodeAt();
            if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
                return false;
            } else {
                continue;
            }
        }
        return true;
    } else {
        return false;
    }
}