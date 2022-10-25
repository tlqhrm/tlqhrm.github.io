function solution(dartResult) {
    let arr = [];
    let bonus = ['S','D','T'];
    let option = ['#','*'];
    let i=0;
    let count=0;
    let temp = 0;
    while(count < 3) {
        if(!isNaN(+(dartResult[i]))) {
            if(temp != 0) temp = +(temp.toString() + dartResult[i]);
            else temp = dartResult[i];
            i++;
            continue;
        }
        if(bonus.includes(dartResult[i])) {
            temp = temp ** (bonus.indexOf(dartResult[i])+1);
            i++;
        }
        if(option.includes(dartResult[i])) {
            if(dartResult[i] === '*') {
                temp *= 2;
                if(count > 0) arr[count-1] *= 2;
            }else if(dartResult[i] === '#') {
                temp *= (-1);
            }
            i++
        }
        arr.push(temp);
        temp = 0;
        count++;
    }
    return arr.reduce((acc,cur) => acc += cur);
}