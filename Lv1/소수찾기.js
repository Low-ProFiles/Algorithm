// 소수찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
    function isPrime(num) {
        if (num === 2) {
            return true;
        }
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i) === true) {
            count += 1;
        }
    }
    return count;
}