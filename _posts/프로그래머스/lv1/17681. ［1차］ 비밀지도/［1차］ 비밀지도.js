function solution(n, arr1, arr2) {
    return arr1.map((v,i) => [...(v|arr2[i]).toString(2).padStart(n,'0')].map(x => x === '0' ? ' ' : '#').join(""))
}