def hansu(n):
    hansu = 0         
    a = []   
    for i in range(1,n+1):
        if i < 100:
            hansu+=1
             
        else:
            l = list(str(i)) 
            for idx, h in enumerate(range(1,len(str(i)))):
                a.append(int(l[h]) - int(l[idx]))
                if h >= i :
                    break
            if len(set(a)) == 1:
                hansu +=1
            a = []
    print(hansu)
n = int(input())
hansu(n)
