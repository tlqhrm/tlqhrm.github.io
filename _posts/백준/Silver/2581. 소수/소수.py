a = int(input())
b = int(input())
c=[]
cnt= 0
for i in range(a,b+1):
    if i == 1:
        continue
    for j in range(2,i):
        if i%j == 0:
            break  
    else:
        c.append(i)
if len(c) ==0:
    print(-1)
else:
    print(sum(c))
    print(min(c))