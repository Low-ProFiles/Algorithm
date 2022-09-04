// 하샤드수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    var answer = true;
    const str = String(x);
    const arr = str.split("").map((arg) => Number(arg));
    console.log(arr);
    const sum = arr.reduce(function add(sum, currValue) {
        return sum + currValue;
    });
    console.log(sum);
    console.log(x);
    if (parseInt(x % sum) === 0) {
        answer = true;
        return answer;
    } else {
        answer = false;
        return answer;
    }
}