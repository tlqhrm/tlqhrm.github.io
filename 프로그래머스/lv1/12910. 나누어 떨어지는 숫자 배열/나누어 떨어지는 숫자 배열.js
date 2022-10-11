function solution(arr, divisor) {
    let filtered = arr.filter(v => {
        if(!(v%divisor)) return v;
    }).sort((a,b) => a-b) 
    
    return filtered.length ? filtered : [-1]
}