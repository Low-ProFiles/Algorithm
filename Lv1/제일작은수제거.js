// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    } else {
        const minValue = Math.min.apply(null, arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === minValue) {
                arr.splice(i, 1);
                i--;
            }
        }
        return arr
    }
}