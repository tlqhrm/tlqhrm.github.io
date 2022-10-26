function solution(n, words) {
    let arr = [words[0]]
    let i=1;
    while(i<words.length) {
        let cur = words[i];
        let prev = words[i-1];
        if(arr.includes(cur) || cur[0] !== prev[prev.length-1]) {
            return [i%n+1, Math.ceil((i+1)/n)];
        }
        arr.push(cur);
        i++;
    }
    return [0,0];
}