function solution(s){
    let p = 0;
    let y = 0;
    [...s].map(a => {
        if(a.toLowerCase() === 'p') p++;
        if(a.toLowerCase() === 'y') y++;
    })

    return p === y
}