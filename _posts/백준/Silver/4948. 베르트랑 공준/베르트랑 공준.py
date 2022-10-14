while True:
    a = int(input())
    if a == 0:
        break
    prime = [False,False] + [True]*((a*2)-1)
    sosu=0
    for i in range(2,(a*2)+1):
        if prime[i]:
            if i >a:
                sosu +=1
                
            for j in range(2*i,(a*2)+1,i):
                prime[j]=False

    print(sosu)