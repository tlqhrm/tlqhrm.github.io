function solution(s, n) {
    return [...s].map(val => {
        const code = val.charCodeAt();
        if(code>64 && code <91) {
            if(code + n < 91) return String.fromCharCode(code + n);
            else return String.fromCharCode(code + n - 26);
        } else if(code > 96 && code < 123) {
            if(code + n < 123) return String.fromCharCode(code + n);
            else return String.fromCharCode(code + n - 26);
        } else return val;
    }).join("")
}