// 최솟값 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
    const newA = A.sort((a, b) => a - b)
    const newB = B.sort((a, b) => b - a)
    let arr = []
    for (let i = 0; i < A.length; i++) {
        arr.push(newA[i] * newB[i])
    }
    return arr.reduce((a, b) => a + b)
}