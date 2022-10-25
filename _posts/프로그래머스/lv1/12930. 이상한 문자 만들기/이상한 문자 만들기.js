function solution(s) {
    return s.split(" ").map((val,idx) => [...val].map((val2, idx2)=> idx2%2 === 0 ? val2.toUpperCase() : val2.toLowerCase()).join("")).join(" ")
}