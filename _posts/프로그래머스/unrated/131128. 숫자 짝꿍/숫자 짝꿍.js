function solution(X, Y) {
    let result = [];
    let mapX = new Map();
    let mapY = new Map();
    let arrX = [...X].sort((a,b) => b-a)
    let arrY = [...Y].sort((a,b) => b-a)
    for(let x of arrX) {
        mapX.set(x, mapX.get(x) ? mapX.get(x)+1 : 1);
    }
    for(let y of arrY) {
        mapY.set(y, mapY.get(y) ? mapY.get(y)+1 : 1);
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
    return result.length !== 0 ? result[0] === '0' ? '0' : result.join('') : '-1'
}