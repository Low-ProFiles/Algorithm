// 소수만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977
// for문 저렇게 쓰는거 마음에 안드는데 저렇게까지 해야하는걸까,, 다른 방법을 찾아보자

function solution(nums) {
    var answer = 0;
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          sum = nums[i] + nums[j] + nums[k];
          if (isPrime(sum)) answer++;
        }
      }
    }
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
    return answer;
  }