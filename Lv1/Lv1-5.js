//짝수와 홀수

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