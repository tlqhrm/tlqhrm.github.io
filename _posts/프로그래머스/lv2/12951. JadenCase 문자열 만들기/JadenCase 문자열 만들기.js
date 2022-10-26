function solution(s) {
   return s.split(' ').map(x => {
        return [...x].map((y,i) => {
            if(i === 0) return y.toUpperCase();
            return y.toLowerCase();
        }).join('');
    }).join(' ');
}