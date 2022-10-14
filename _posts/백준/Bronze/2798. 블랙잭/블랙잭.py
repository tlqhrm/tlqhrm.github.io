n,m = map(int,input().split())
l =list(map(int,input().split()))
l =l[::-1]
a = [0]

for i in l:
    for j in l[l.index(i)+1:]:
        for h in l[l.index(j)+1:]:
            if max(a) < i+j+h <= m:
                a.append(i+j+h)

print(max(a))  