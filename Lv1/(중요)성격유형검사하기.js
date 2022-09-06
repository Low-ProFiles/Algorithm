// 성격 유형 검사하기
// https://school.programmers.co.kr/learn/courses/30/lessons/118666
// 새로운 객체를 생성해서 key, value로 담아보자

function solution(survey, choices) {
    let answer = "";
    const score = [0, 3, 2, 1, 0, 1, 2, 3];
    let newObj = new Object();
    ["R", "T", "C", "F", "J", "M", "A", "N"].forEach(
        (index) => (newObj[index] = 0)
    );
    for (let i = 0; i < survey.length; i++) {
        newObj[survey[i][parseInt(choices[i] / 4)]] += score[choices[i]];
    }
    answer += newObj["R"] >= newObj["T"] ? "R" : "T";
    answer += newObj["C"] >= newObj["F"] ? "C" : "F";
    answer += newObj["J"] >= newObj["M"] ? "J" : "M";
    answer += newObj["A"] >= newObj["N"] ? "A" : "N";
    return answer
}