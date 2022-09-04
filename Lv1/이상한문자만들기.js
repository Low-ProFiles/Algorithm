// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(n) {
    const str = n.toString().split(" ");
    const arr = [];
    for (const i in str) {
        let index = 0;
        for (const j in str[i]) {
            if (index % 2 === 0) {
                arr.push(str[i][j].toUpperCase());
            } else {
                arr.push(str[i][j].toLowerCase());
            }
            index++;
        }
        arr.push(" ");
    }
    arr.pop();
    const answer = arr.join("");
    return answer;
}
