function solution(strings, n) {
    
    return strings.sort((a,b)=> {
        return a[n] !== b[n] ? a[n].localeCompare(b[n]) : a.localeCompare(b);
    })
}