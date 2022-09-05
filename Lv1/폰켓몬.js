// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i])
        }
    }
    if (arr.length <= nums.length / 2) {
        return arr.length
    } else {
        while (true) {
            arr.pop()
            if (arr.length <= nums.length / 2) {
                break;
            }
        }
    }
    return arr.length
}