function solution(x) {
     return !(x % [...String(x)].map(a => +a).reduce((acc,cur) => acc += cur))
}