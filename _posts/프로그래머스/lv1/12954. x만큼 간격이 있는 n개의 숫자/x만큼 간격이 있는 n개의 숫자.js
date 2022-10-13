function solution(x, n) {
    return new Array(n).fill(0).map((cur,idx) => x * (idx+1))
}