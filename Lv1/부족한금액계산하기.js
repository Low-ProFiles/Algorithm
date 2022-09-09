// 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let answer = 0;
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum += i;
    }
    sum * price > money ? (answer = sum * price - money) : (answer = 0);
    return answer;
}