// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909#

function solution(s) {
    if (s[0] === ')') {
        return false
    }
    let balance = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            balance += 1
        } else {
            balance -= 1
            if (balance < 0) return false
        }
    }
    return balance === 0 ? true : false
}