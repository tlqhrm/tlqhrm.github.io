n = int(input())

for i in range(n//2,n+1):
    a = list(map(int,list(str(i))))
    if i+sum(a) ==n:
        print(i)
        break
    elif i ==n:
        print(0)