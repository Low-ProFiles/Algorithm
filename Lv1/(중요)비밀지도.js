// 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681
// 어렵다.. 10번째 줄에 대해 생각하는게 힘들었음

function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        const binary = (arr1[i] | arr2[i]).toString(2);
        let tempAnswer = [];
        for (let j = binary.length - n; j < binary.length; j++) {
            if (binary[j] === "1") {
                tempAnswer.push("#");
            } else {
                tempAnswer.push(" ");
            }
        }
        answer.push(tempAnswer.join(""));
    }
    return answer;
}