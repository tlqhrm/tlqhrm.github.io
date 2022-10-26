function solution(s) {
    let result = [0,0];
    let arr = s.split('').sort((a,b) => b-a);
    
    while(arr.length > 1) {
        let startZero = arr.indexOf('0');
        if(startZero !== -1) {
            result[1] += arr.length - startZero;
            arr = startZero.toString(2).split('').sort((a,b) => b-a);
        } else {
            arr = arr.length.toString(2).split('').sort((a,b) => b-a);
        } 
        result[0]++;
    }
    
    return result;
}