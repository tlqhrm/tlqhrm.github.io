function solution(A,B){
    let ascA = A.sort((a,b)=>a-b);
    let descB = B.sort((a,b)=>b-a);    
    return ascA.reduce((acc,cur,idx)=> acc + (cur*descB[idx]), acc = 0);
}