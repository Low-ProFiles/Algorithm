// 나머지가 1이 되는 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    let arr = [];
    let index = 2;

    while (index <= n - 1) {
        if ((n - 1) % index == 0) {
            arr.push(index);
        }
        index += 1;
    }
    return arr[0]
}