//두 정수 사이의 합

function solution(a, b) {
    var answer = 0;
    if (a >= b){
        answer = ( (a + b) / 2 ) * ( a - b + 1 );
    }
    else{
        answer = ( (a + b) / 2 ) * ( b - a + 1 );
    }
    return answer;
}