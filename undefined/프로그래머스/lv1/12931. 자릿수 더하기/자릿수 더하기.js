function solution(n)
{
    return [...String(n)].map(a => +a).reduce((acc, cur) => acc += cur)
}