t = int(input())
a = []
for i in range(t):
    a.append(list((input())))
    
for idx, h in enumerate(range(t)):
    
    if len(a[idx]) >=3:
        for i in range(2,len(a[idx])):
            print(a[idx][i]*(int(a[idx][0])),end="")
    print()