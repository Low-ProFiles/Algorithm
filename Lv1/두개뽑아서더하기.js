// 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                arr.push(numbers[i] + numbers[j]);
            }
        }
    }
    const answer = [...new Set(arr)];
    return answer.sort((a, b) => a - b);
}