function solution(n) {
    let i=1;
    let squared=0;
    while(true) {
        squared = i*i;
        if(squared === n) return (i+1)*(i+1);
        if(squared > n) return -1
        i++;
    }
}