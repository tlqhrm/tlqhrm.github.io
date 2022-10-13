function solution(numbers) {
  var answer = 0;
  numbers.sort((a,b) => a-b);

  for(let i=9; i>=0; i--){
    for(let j=numbers.length; j>=0; j--){
      if(numbers[j-1] === i) {
        numbers.pop();
        break;
      }
      if(j === 0) {
        answer += i;
      }
    }
  }

  return answer;
}