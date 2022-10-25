function solution(a, b, n) {
    let have = n;
    let earn = 0;
    while(have >= a){
        earn += parseInt(have/a) * b;
        have = parseInt(have/a) * b + (have%a);
    }
    return earn;
}