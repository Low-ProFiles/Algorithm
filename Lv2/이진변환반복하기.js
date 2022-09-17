// 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
    const counter = (num, number, count) => {
        let arr = "";
        if (num === "1") {
            return [number, count];
        } else {
            for (let i = 0; i < num.length; i++) {
                if (num[i].includes(0)) {
                    arr += "";
                    count += 1;
                } else {
                    arr += "1";
                }
            }
            number += 1;
            return counter(arr.length.toString(2), number, count);
        }
    };
    return counter(s, 0, 0);
}ㄹ