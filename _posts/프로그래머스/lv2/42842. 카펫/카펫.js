function solution(brown, yellow) {
    let 약수 = [1];
    
    for(let i=2; i<yellow+1; i++) {
        if((yellow)%i === 0) 약수.push(i);
    }
    
    for(let i=0; i<약수.length; i++) {
        const x = 약수[i];
        for(let j=i; j<약수.length; j++) {
            const y = 약수[j];
            if(x+x+y+y+4 === brown && x*y === yellow) return [y+2,x+2];
        }
    }
    return [3,3];
}