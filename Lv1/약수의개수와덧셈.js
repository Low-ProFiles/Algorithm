// 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    let answer = [];
    let arr = [];

    for (let i = 0; i <= right - left; i++) {
        let index = 1;
        let tempArr = [];
        while (index <= left + i) {
            if ((left + i) % index === 0) {
                tempArr.push(index);
            }
            index += 1;
        }
        arr.push(tempArr);
        arr[i].length % 2 === 0
            ? answer.push(left + i)
            : answer.push((left + i) * -1);
    }
    return answer.reduce((a, b) => a + b);
}