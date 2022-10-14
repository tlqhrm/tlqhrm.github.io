n = int(input())
a=[]

for i in range(n):
    weigt,hieght = map(int,input().split())
    a.append((weigt,hieght))

for i in a:
    rank = 1
    for j in a:
        if i[0] < j[0] and i[1] < j[1]:
            rank+=1
    print(rank,end=" ")