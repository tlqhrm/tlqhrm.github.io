function solution(d, budget) {
    d = d.sort((a,b)=>a-b);
    let acc = 0;
    for(const [idx,money] of d.entries()) {
        console.log(acc)
        if(acc + money > budget) return idx;
        acc += money;
    }
    return d.length
}