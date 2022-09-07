// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051
//numbers가 stanDard안에 있다면 해당 요소를 stanDard에서 삭제

function solution(numbers) {
    const stanDard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr = [];
    for (let i = 0; i < stanDard.length; i++) {
        if (!numbers.includes(stanDard[i])) {
            arr.push(stanDard[i]);
        }
    }
    return arr.reduce((a, b) => a + b);
}