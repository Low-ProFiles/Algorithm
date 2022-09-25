// 영어 끝말잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let answer = [0, 0];
    const temp = [];
    temp.push(words[0]);
    for (let i = 1; i < words.length; i++) {
        if (
            words[i - 1][words[i - 1].length - 1] === words[i][0] &&
            !temp.includes(words[i])
        ) {
            temp.push(words[i]);
        } else {
            const turn = parseInt(i / n) + 1;
            const player = (i % n) + 1;
            return (answer = [player, turn]);
        }
    }
    return answer;
}