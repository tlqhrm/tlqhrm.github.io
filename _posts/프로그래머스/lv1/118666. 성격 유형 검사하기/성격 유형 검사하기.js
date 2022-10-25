function solution(survey, choices) {
    let options = [['R','T'],['C','F'],['J','M'],['A','N']];
    let map = new Map();
    let arr = [];
    
    for(let [i,v] of survey.entries()) {
        let choice = choices[i]
        let score = Math.abs(4-choice);
        
        if(choice < 4) map.set(v[0], map.get(v[0])+score || score);
        else if(choice > 4) map.set(v[1], map.get(v[1])+score || score);
    }
    
    for(let v of options) {
        if((map.get(v[0]) || 0) >= (map.get(v[1]) || 0)) {
            arr.push(v[0]);
        }else arr.push(v[1]);
        
    }
    return arr.join("");
}