function solution(people, limit) {
  let people2 = people.sort((a,b) => b - a)
  for(let i=0; i<people2.length; i++) {
    if(people[i] + people[people.length-1] <= limit) {
      people2 = people2.slice(i);
      break;
    }
  }
  let result = people.length - people2.length;
    
  let i = 0; 
  while(people2.length > i) {
    people2
    let j = people2.length-1;
    if(people2[i] + people2[j] <= limit) {
      people2.pop();
    }
    result++;
    i++;
  }
  return result;
}