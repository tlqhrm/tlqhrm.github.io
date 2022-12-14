function solution(X, Y) {
    let result = [];
    let mapX = new Map();
    let mapY = new Map();
    for(let x of [...X]) {
        mapX.set(x, mapX.get(x)+1 || 1);
    }
    for(let y of [...Y]) {
        mapY.set(y, mapY.get(y)+1 || 1);
    }
    for(let i=9; i>-1; i--) {
        let numX = mapX.get(`${i}`);
        let numY = mapY.get(`${i}`);
        if(numX !== undefined && numY !== undefined) {
            for(let j=0; j<Math.min(numX,numY); j++) {
                result.push(`${i}`);
            }
        }
    }
    return result.sort((a,b) => b-a).length !== 0 ? result[0] === '0' ? '0' : result.join('') : '-1'
}