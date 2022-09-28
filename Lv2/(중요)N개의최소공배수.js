// N개의 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12953
// 재귀를 이용해 최소공배수 구하기 중요한 식인 거 같아서 체크해두자.

function solution(arr) {
    const getMinValue = (a, b) => {
        return b === 0 ? a : getMinValue(b, a % b);
    };
    return arr.reduce((a, b) => (a * b) / getMinValue(a, b));
}