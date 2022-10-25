function solution(n, arr1, arr2) {
    let binary1 = arr1.map(x => x.toString(2).padStart(n,'0'))
    let binary2 = arr2.map(x => x.toString(2).padStart(n,'0'))
    let result = [];
    for(let i=0; i<n; i++) {
        let pushString = "";
        for(let j=0; j<n; j++) {
            if(binary1[i][j] !== '0' || binary2[i][j] !== '0') {
                pushString += '#'; 
            }else pushString += ' ';
        }
        result.push(pushString)
    }
    return result;
}