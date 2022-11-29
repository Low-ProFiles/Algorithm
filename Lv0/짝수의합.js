function solution(n) {
    var answer = 0;
    n % 2 === 0 ? answer = n * (n + 2) / 4 : answer = (n + 1) * (n - 1) / 4
    return answer;
}