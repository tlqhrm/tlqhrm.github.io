t = int(input())

c = []
for i in range(1,t+1):
    a,b = map(int,input().split())
    c.append(a+b)
for i in range(1,t+1):
    print(c[i-1])
