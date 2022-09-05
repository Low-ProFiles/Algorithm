// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 로직에 대한 고민이 필요

function solution(sizes) {
    let width = [];
    let height = [];
    sizes.map((element, index) => {
        width[index] = Math.max(...element);
        height[index] = Math.min(...element);
    });
    return Math.max(...width) * Math.max(...height);
}