n = m = int(input())

cycle = 0

while True:
    ten = n//10
    one = n%10
    res = (ten+one)%10
    n = (one*10) + res
    cycle +=1
    if n == m:
        print(cycle)
        break