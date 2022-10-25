function solution(strings, n) {
    
    return strings.sort((a,b)=> {
        let count = n;
        if(a[count] !== b[count]) {
            return a[count].charCodeAt() - b[count].charCodeAt();
        }
        if(a < b) return -1;
        if(a > b) return 1;
        if(a === b) return 0;
        else return -1;
    })
}