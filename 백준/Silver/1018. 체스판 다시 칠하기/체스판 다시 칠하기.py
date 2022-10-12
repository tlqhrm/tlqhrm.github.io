n,m = map(int,input().split())
a = []
for i in range(n):
    a.append(list(input()))

l = []
for i in range(n-7):      
    for h in range(m-7):
        cnt=0
        for j in range(8):
            for g in range(8):               
                if (j+g)%2 == 1:
                     if a[i][h] == a[i+j][h+g]:
                         cnt+=1
                elif (j+g)%2 == 0:
                     if a[i][h] != a[i+j][h+g]:
                         cnt+=1
        l.append(cnt)
        cnt=0
        for j in range(8):
            for g in range(8):               
                if (j+g)%2 == 1:
                     if a[i][h] != a[i+j][h+g]:
                         cnt+=1
                elif (j+g)%2 == 0:
                     if a[i][h] == a[i+j][h+g]:
                         cnt+=1
        l.append(cnt)
print(min(l))