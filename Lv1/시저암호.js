// 시저암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        switch (true) {
            case s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 - n:
                answer += String.fromCodePoint(s[i].charCodeAt() + n);
                break;
            case s[i].charCodeAt() > 90 - n && s[i].charCodeAt() <= 90:
                answer += String.fromCodePoint(s[i].charCodeAt() - 26 + n);
                break;
            case s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122 - n:
                answer += String.fromCodePoint(s[i].charCodeAt() + n);
                break;
            case s[i].charCodeAt() > 122 - n && s[i].charCodeAt() <= 122:
                answer += String.fromCodePoint(s[i].charCodeAt() - 26 + n);
                break;
            case s[i].charCodeAt() === 32:
                answer += String.fromCharCode(32);
                break;
            default:
                if (Number(s[i]) <= 25 - n) {
                    answer += Number(s[i] + n);
                } else {
                    answer += Number(s[i] - 25 + n);
                }
        }
    }
    return answer;
}