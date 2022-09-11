// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    let answer = "";
    let tempArr = [];
    let tempAnswer = "";
    const arr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 0 && s[i] <= 9) {
            tempArr.push(Number(s[i]));
        } else {
            tempAnswer += s[i];
            if (arr.includes(tempAnswer)) {
                tempArr.push(arr.indexOf(tempAnswer));
                tempAnswer = [];
            }
        }
    }
    for (let i = 0; i < tempArr.length; i++) {
        answer += tempArr[i];
    }
    return Number(answer);
}