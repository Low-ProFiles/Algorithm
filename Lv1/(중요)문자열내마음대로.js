// 문자열 내 마음대로 정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 중요포인트 -> localeCompare

function solution(strings, n) {
    return strings.sort((a, b) =>
        a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
    );
}