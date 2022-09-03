// 문자열 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    return s.split('').sort().reverse().join('');
}