n = int(input())
l = list(map(int,input().split()))

res = 0

m = max(l)

for i in range(n):
    res += (l[i]/m) * 100
print(res/n)