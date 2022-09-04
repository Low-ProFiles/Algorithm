// 클라츠추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    let count = 0;
    if (num === 1) {
        return 0;
    } else {
        while (num !== 1) {
            let i = 0;
            if (num % 2 === 0) {
                num = num / 2;
                i += 1;
                if (count >= 500) {
                    return -1;
                }
            } else {
                num = num * 3 + 1;
                i += 1;
                if (count >= 500) {
                    return -1;
                }
            }
            count += i;
        }
        return count;
    }
}