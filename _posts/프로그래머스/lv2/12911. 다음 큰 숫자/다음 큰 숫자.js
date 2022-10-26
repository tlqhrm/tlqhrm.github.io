function solution(n) {
    let oneCount = n.toString(2).split('').sort((a,b) => b-a).indexOf('0');
    if(oneCount === -1) oneCount = n.toString(2).length
    while(true) {
        n++;
        if(oneCount === n.toString(2).split('').sort((a,b) => b-a).indexOf('0')) return n
    }
}