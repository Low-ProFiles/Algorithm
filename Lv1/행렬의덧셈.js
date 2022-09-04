// 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    var answer = [];
  
    for (let i = 0; i < arr1.length; i++) {
      let new_answer = [];
      for (let j = 0; j < arr1[i].length; j++) {
        new_answer.push(arr1[i][j] + arr2[i][j]);
      }
      answer.push(new_answer);
    }
    return answer;
  }
  