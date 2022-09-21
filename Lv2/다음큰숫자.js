// 다음 큰 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
    const temp = [...n.toString(2)].filter((e) => e === "1").length;
    let i = n;
    while (true) {
        i++;
        if ([...i.toString(2)].filter((e) => e === "1").length === temp) {
            break;
        }
    }
    return i
}