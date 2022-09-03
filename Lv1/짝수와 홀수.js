// 짝수와 홀수
// https://school.programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
    var answer = '';
    const newNum = parseInt(num);
    if (newNum%2===0){
        answer = 'Even';
    }
    else{
        answer = 'Odd';
    }
    return answer;
}