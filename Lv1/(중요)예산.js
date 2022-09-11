// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982
// 배열에서 sort() 메서드를 사용하는 상황에서 default는 유니코드 기준이다.
// 이 말인 즉슨, d.sort()의 결과는 [1, 10, 2, 30]로 나타나게 되는 것이다.
// 숫자 크기대로 오름차순을 원한다면 d.sort((a,b)=>a-b)를 사용하자.


function solution(d, budget) {
    const arr = d.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        budget -= arr[i];
        count += 1;
        if (budget < 0) {
            count -= 1;
            break;
        }
    }
    return count;
}