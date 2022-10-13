n = int(input())
a = list(input().split())
cnt= 0
for i in a:
    if i == "1":
        continue
    for j in range(2,int(i)):
        if int(i)%j == 0:
            break  
    else:
        cnt+=1
print(cnt)