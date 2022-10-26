
function solution(n) {
    let minusOne = 1;
    let minusTwo = 0;
    let i=2;
    while(i < n) {
        let temp = minusTwo;
        minusTwo = minusOne;
        minusOne = (temp + minusTwo) % 1234567;
        i++;
    }

    return (minusOne + minusTwo) % 1234567;
}